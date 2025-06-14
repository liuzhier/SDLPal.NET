using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static SafeSys;

public class Script
{
   public   string      FuncName;
   public   string[]    Args;

   public   string
   STR(
      int      index
   )
   {
      return Args[index];
   }

   public   bool
   BOOL(
      int      index
   )
   {
      int      val;

      if (int.TryParse(STR(index), out val))
      {
         return S_B(INT(index));
      }
      else
      {
         return S_BOOL(STR(index));
      }
   }

   public   byte
   BYTE(
      int      index
   )
   {
      return S_BYTE(Args[index]);
   }

   public   short
   SHORT(
      int      index
   )
   {
      return S_SHORT(Args[index]);
   }

   public   int
   INT(
      int      index
   )
   {
      return S_INT(Args[index]);
   }

   public   uint
   DWORD(
      uint      index
   )
   {
      return S_DWORD(Args[index]);
   }

   public   float
   FLOAT(
      int   index
   )
   {
      return S_FLT(Args[index]);
   }

   public   int
   ADDR(
      int      index
   )
   {
      return PalScript.GetScrAddr(STR(index));
   }
}
