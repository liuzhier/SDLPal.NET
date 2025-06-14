using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

public class Scene
{
   public   string         Name;             // name of this scene
   public   ushort         MapID;            // number of the map

   [JsonProperty("Script")]
   public   Script         _Script;

   [JsonIgnore]
   public   List<Event>    listEvent   = [null];
   //public   List<Event>    listEvent   = [];

   public class Script
   {
      public   string      ScrEnter;        // when entering this scene, execute script from here
      public   string      ScrTeleport;     // when teleporting out of this scene, execute script from here
   }
}
