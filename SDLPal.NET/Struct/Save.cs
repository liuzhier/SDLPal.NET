using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalMap;
using static PalVideo;
using static SafeSys;

public class PalSave
{
   public   int
      SavedTimes        = 0,     // Saved times
      Cash              = 0,     // Amount of cash
      CollectValue      = 0,     // Value of "collected" items
      SceneID           = 0,     // Current scene ID
      MusicID           = 0,     // Music number
      BattleMusicID     = 0,     // Battle music number
      BattleFieldID     = 1,     // Battle field number
      PartySize         = 0,     // How many people are there at the party
      PartyLayerOffset  = 0,     // Party layer offset
      ChaseRange        = 1,     // The range of enemy pursuit
      ChaseCycles       = 0;     // The time of enemy pursuit/fainting

   public   Screen.Wave          SceneWave      = new Screen.Wave();
   public   Trail                PartyTrail     = new Trail();                // Player party main trail
   public   Party[]              arrParty       = new Party[MAX_HERO_NUM];    // Player party
   public   List<Follower>       listFollower   = new List<Follower>();       // Follower

   [JsonIgnore]
   public   Entity               _Entity        = new Entity();

   [JsonIgnore]
   public   List<Inventory>      listInventory  = new List<Inventory>();
   
   [JsonIgnore]
   public   List<Scene>          listScene      = [null];

   [JsonIgnore]
   public   Scene                CurrScene      => listScene[SceneID];

   public PalSave()
   {
      int      i;

      //
      // Initialize the role team
      //
      for (i = 0; i < arrParty.Length; i++)
      {
         arrParty[i] = new Party();
      }
   }

   public class Trail
   {
      public   Pos               Pos         = new Pos();               // Position
      public   PalDirection      Direction   = PalDirection.South;      // Direction
      public   int               FrameID     = 0;                       // Current frame number

      [JsonIgnore]
      public   int         SpriteFramesAuto  = 0;     // Total number of frames of the sprite, used by auto script

      [JsonIgnore]
      public   BlockPos    BPos              => BlockPos.FromPos(Pos);     // The coordinates of the map block

      [JsonIgnore]
      static   Pos         _PosR             = new Pos();                  // Position (Ratio)

      [JsonIgnore]
      public   Pos         PosR
      {
         get
         {
            _PosR.X = S_Ratio(Pos.X);
            _PosR.Y = S_Ratio(Pos.Y);

            return _PosR;
         }
      }
   }

   public class Party
   {
      public   int      HeroID   = 1;

      [JsonIgnore]
      public   Hero     Hero     => S_GetHero(HeroID);

      [JsonProperty("Trail")]
      public   Trail    Trail    = new Trail();
   }

   public class Follower
   {
      public   int      BitmapID;

      [JsonProperty("Trail")]
      public   Trail    Trail;
   }

   public class Experience
   {
      public   int      Level = 1;                 // Current level
      public   int      Exp   = 1;                 // Current experience points

      //
      // The experience required for the next level
      // It grows as a quadratic function, and the formula is:
      // Exp = 25 / 2 * Level * (Level - 1) + INIT_EXP_SEED
      //
      public int      Count => (int)(25 / 2.0f * Level * (Level - 1)) + INIT_EXP_SEED;
   }

   public class ExperienceAll
   {
      public   Experience     Master      = new Experience();
      public   Experience     HP          = new Experience();
      public   Experience     MP          = new Experience();
      public   Experience     Attack      = new Experience();
      public   Experience     MagicPower  = new Experience();
      public   Experience     Defense     = new Experience();
      public   Experience     Dexterity   = new Experience();
      public   Experience     Flee        = new Experience();
   }

   public class PoisonStatus
   {
      public   ushort      PoisonID;         // Kind of the poison
      public   ushort      PoisonScript;     // Script entry
   }

   public class SpecialStatus
   {
      public   ushort      RoundCount;    // Remaining rounds

      [JsonProperty("Good")]
      public   Good        _Good;

      [JsonProperty("Bad")]
      public   Bad         _Bad;

      public enum Good
      {
         None,
         Puppet,        // The deceased continued to carry out physical attacks
         Bravery,       // More power for physical attacks
         Protect,       // The damage received is halved
         Haste,         // Triple the speed of casting spells
         DualAttack,    // Two normal attacks (up to 5 rounds)
      }

      public enum Bad
      {
         None,
         Chaos,               // Randomly Attacking Teammates
         CannotAciton,        // Unable to take action
         CannotUseMagic,      // Unable to cast magic
         Exanimation,         // Unable to take action, but with a 50% chance of being woken up by a beating
      }
   }

   public class Inventory
   {
      public   int      ItemID         = 0;

      public   int      Amount         = 0;     // Amount of this item

      public   int      AmountInUse    = 0;     // In-use amount of this item

      public   Item     Item     => S_GetSave()._Entity.Item[ItemID];      // Item object code
   }
}
