using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static PalMap;

public class SummonGold
{
   public   string         Comment;          // It's just a note and has no practical use
   public   ushort         BaseDamage;       // Base Damage
   public   ushort         CostMP;           // MP cost
   public   short          SoundID;          // Sound effect

   [JsonProperty("Frame")]
   public   Frame          _Frame;

   [JsonProperty("Script")]
   public   Script         _Script;

   public class Frame
   {
      public   ushort         BitmapID;
      public   Pos            OffsetPos;
      public   ushort         Idle;             // In-place peristaltic frame counting
      public   ushort         Magic;            // Magic action frame count (Magic posture frame)
      public   ushort         Attack;           // Attack frame count
      public   short          Gamma;            // Gamma value (Brightness/depth of field)
   }

   public class Script
   {
      public   string      Success;       // When magic succeed, execute script from here
      public   string      Use;           // When use this magic, execute script from here
   }
}
