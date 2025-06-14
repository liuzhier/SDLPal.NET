using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

public class Entity
{
   public   List<Hero>        Hero     = [
      new Hero
      {
         Name = "Null",
      }
   ];

   public   List<Magic>       Magic    = [
      new Magic
      {
         Name = "Null",
      }
   ];

   public   List<Item>        Item     = [
      new Item
      {
         Name = "Null",
      }
   ];

   public   List<Enemy>       Enemy    = [
      new Enemy
      {
         Name = "Null",
      }
   ];

   public   List<Poison>      Poison   = [
      new Poison
      {
         Name = "Null",
      }
   ];
}
