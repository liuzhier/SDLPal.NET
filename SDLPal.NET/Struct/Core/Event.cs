using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalSave;

public class Event
{
   public   string         Comment;          // It's just a note and has no practical use

   [JsonProperty("Frame")]
   public   Frame          _Frame;

   [JsonProperty("Status")]
   public   Status         _Status;

   [JsonProperty("Script")]
   public   Script         _Script;

   [JsonProperty("ScriptFrame")]
   public   ScriptFrame    _ScriptFrame;

   public class Frame
   {
      public   int      VanishTime;          // Vanish time (enemy)
      public   int      StillTime;           // Still time (enemy)
      public   int      LayerOffset;         // Layer offset
      public   int      SpriteID;            // Number of the sprite
      public   int      SpriteFrames;        // Total number of frames of the sprite

      [JsonProperty("Pos")]
      public   Trail    Trail;              // Current frame number
   }

   public class Status
   {
      public   bool     Display;             // State of this object
      public   bool     IsObstacle;          // Block the passage
      public   bool     IsAutoTrigger;       // Whether to trigger automatically, 
      public   int      TriggerDistance;     // Trigger distance
   }

   public class Script
   {
      [JsonIgnore]
      public   int         _SrcTrigger = 0;
      public   string      SrcTrigger;    // Trigger script entry

      [JsonIgnore]
      public   int         _ScrAuto    = 0;
      public   string      ScrAuto;       // Auto script entry
   }

   public class ScriptFrame
   {
      public   int      TriggerIdleFrame;    // Count of idle frames, used by trigger script
      public   int      AutoIdleFrame;       // Count of idle frames, used by auto script
   }
}
