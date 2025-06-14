using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

public class Poison
{
   public   string      Name;             // Name of the object (in WORD.DAT)
   public   ushort      PoisonLevel;      // Level of the poison
   public   string      ColorHex;         // Color of avatars (Hexadecimal value)

   [JsonProperty("Script")]
   public   Script      _Script;

   public class Script
   {
      public   string      Player;     // Script executed when player has this poison (per round)
      public   string      Enemy;      // Script executed when enemy has this poison (per round)
   }
}
