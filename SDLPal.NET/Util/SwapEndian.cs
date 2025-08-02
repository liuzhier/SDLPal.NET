using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public static class SwapEndian
{
   public   static   bool     IsLE  => BitConverter.IsLittleEndian;

   private static ushort
   S_16(
      ushort      value
   ) => (ushort)((value >> 8) | (value << 8));

   private static uint
   S_32(
      uint     value
   ) => (value >> 24) |
      ((value >> 8) & 0x0000FF00) |
      ((value << 8) & 0x00FF0000) |
      (value << 24);

   private static ulong
   S_64(
      ulong    value
   ) => (value >> 56) |
      ((value >> 40) & 0x000000000000FF00) |
      ((value >> 24) & 0x0000000000FF0000) |
      ((value >> 8) & 0x00000000FF000000) |
      ((value << 8) & 0x000000FF00000000) |
      ((value << 24) & 0x0000FF0000000000) |
      ((value << 40) & 0x00FF000000000000) |
      (value << 56);

   public static float
   S_Single(
      float    value
   ) =>
      BitConverter.ToSingle(
         BitConverter.GetBytes(
            S_32(
               BitConverter.ToUInt32(
                  BitConverter.GetBytes(value), 0
               )
            )
         ), 0
      );

   public static ushort
   BE16(
      ushort      value
   ) => IsLE ? S_16(value) : value;

   public static short
   BE16(
      short    value
   ) => IsLE ? (short)S_16((ushort)value) : value;

   public static ushort
   LE16(
      ushort      value
   ) => IsLE ? value : S_16(value);

   public static short
   LE16(
      short    value
   ) => IsLE ? value : (short)S_16((ushort)value);

   public static uint
   BE32(
      uint     value
   ) => IsLE ? S_32(value) : value;

   public static int
   BE32(
      int      value
   ) => IsLE ? (int)S_32((uint)value) : value;

   public static uint
   LE32(
      uint     value
   ) => IsLE ? value : S_32(value);

   public static int
   LE32(
      int      value
   ) => IsLE ? value : (int)S_32((uint)value);

   public static ulong
   BE64(
      ulong    value
   ) => IsLE ? S_64(value) : value;

   public static ulong
   LE64(
      ulong    value
   ) => IsLE ? value : S_64(value);

   public static float
   BEFlt(
      float    value
   ) => BitConverter.IsLittleEndian ? S_Single(value) : value;
   

   public static float
   LEFlt(
      float    value
   ) => BitConverter.IsLittleEndian ? value : S_Single(value);
}
