﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class Shop
{
   public   Item[]      arrItem;

   public
   Shop(
      int      nCount
   )
   {
      arrItem = new Item[nCount];
   }
}
