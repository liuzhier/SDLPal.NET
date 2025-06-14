using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class Resistance
{
   [JsonProperty("Elemental")]
   public   Elemental      _Elemental;

   public   float    Physics;
   public   float    Poison;
   public   float    Sorcery;
   public   float    Ultimate;
   public   float    Leechcraft;
   public   float    Light;
   public   float    Evil;

   public class Elemental
   {
      public   float    Wind;
      public   float    Thunder;
      public   float    Water;
      public   float    Fire;
      public   float    Earth;
   }
}
