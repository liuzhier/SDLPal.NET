using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static PalMap;

public class BattleField
{
   public   string         Name;

   public   short          VideoWave;        // Level of screen waving

   [JsonProperty("Resistance")]
   public   Resistance     _Resistance;      // Effect of magics

   [JsonProperty("FighterPos")]
   public   FighterPos     _FighterPos;      // The coordinates of enemies and heroes on the battlefield

   public class FighterPos
   {
      public   Pos[]    Hero;
      public   Pos[]    Team1;
      public   Pos[]    Team2;
      public   Pos[]    Team3;
   }
}
