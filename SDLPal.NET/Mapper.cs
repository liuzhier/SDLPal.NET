using Microsoft.VisualBasic.FileIO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static SafeSys;
using static System.Runtime.InteropServices.JavaScript.JSType;

[AttributeUsage(AttributeTargets.Field)]
public unsafe class PalMapper : Attribute
{
   public static void
   SetFieldValue(
      object                        dest,
      Dictionary<string, object>    dict
   )
   {
      Type           type;
      FieldInfo?     field;

      //
      // Obtain type information
      //
      type = dest.GetType();

      foreach (var map in dict)
      {
         //
         // Obtain the characteristics of the field
         //
         field = type.GetField(map.Key, BindingFlags.Public | BindingFlags.Instance);
         S_FAILED(
            "Type.GetField",
            $@"The mapping field '{map.Key}' failed",
            field != null
         );

         //
         // Assign values to the fields
         //
         field.SetValue(dest, Convert.ChangeType(map.Value, field.FieldType));
      }
   }

   public static void
   SetFieldValue<Struct>(
      Struct*                       lpDest,
      Dictionary<string, object>    dict
   ) where Struct : struct
   {
      Type           type;
      FieldInfo?     field;
      object         boxed;
      GCHandle       handle;

      //
      // Obtain type information
      //
      type = (*lpDest).GetType();

      //
      // Perform boxing operation
      //
      boxed = (*lpDest);
      foreach (var map in dict)
      {
         //
         // Obtain the characteristics of the field
         //
         field = type.GetField(map.Key, BindingFlags.Public | BindingFlags.Instance);
         S_FAILED(
            "Type.GetField",
            $@"The mapping field '{map.Key}' failed",
            field != null
         );

         //
         // Assign values to the fields
         //
         field.SetValue(boxed, Convert.ChangeType(map.Value, field.FieldType));
      }

      //
      // Fixed managed memory and perform unboxing operations
      //
      handle = GCHandle.Alloc(boxed, GCHandleType.Pinned);
      S_MEMCPY(handle.AddrOfPinnedObject(), (nint)lpDest, sizeof(Struct));

      //
      // Release handle
      //
      if (handle.IsAllocated)
      {
         handle.Free();
      }
   }
}
