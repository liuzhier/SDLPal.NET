﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static PalSave;

public class Hero
{
   public   string      Name;             // Name of the object (in WORD.DAT)
   public   int         CoveredBy;        // Who will guard me when I'm not in good health
   public   int         WalkFrames;       // Walk frame (???)

   public   Resistance     Resistance;    // Resistance to physical attacks

   [JsonProperty("HeroBase")]
   public   HeroBase       _HeroBase;     // Hero base

   [JsonProperty("Magic")]
   public   Magic          _Magic;

   [JsonProperty("Sound")]
   public   Sound          _Sound;        // Sound effect

   [JsonProperty("Script")]
   public   Script         _Script;

   [JsonIgnore]
   public   EquipEffect       _EquipEffect;        // The bonus of equipment to attributes
   [JsonIgnore]
   public   ExperienceAll     ExperienceAll  = new ExperienceAll();     // Experience data
   [JsonIgnore]
   public   List<PoisonStatus>      listPoisonStatus     = [];
   [JsonIgnore]
   public   List<SpecialStatus>     listSpecialStatus    = [];

   public class Magic
   {
      public   int                     Cooperative;      // Cooperative magic
      public   HashSet<int>            listLearned;      // A list of magic that has been learned
      public   HashSet<Learnable>      listLearnable;    // A list of magic that can be learned

      public class Learnable
      {
         public   int      Level;
         public   int      MagicID;

         public override int GetHashCode() => MagicID.GetHashCode();
      }
   }

   public class Sound
   {
      public   int      Death;       // Sound played when player dies
      public   int      Attack;      // Sound played when player attacks
      public   int      Weapon;      // Sound weapon (???)
      public   int      Critical;    // Sound played when player make critical hits
      public   int      Magic;       // Sound played when player is casting a magic
      public   int      Cover;       // Sound played when player cover others
      public   int      Dying;       // Sound played when player is dying
   }

   public class Script
   {
      public   string      FriendDeath;      // When magic succeed, execute script from here
      public   string      Dying;            // When use this magic, execute script from here
   }

   public class EquipEffect
   {
      public   HeroBase    Head;
      public   HeroBase    Body;
      public   HeroBase    Armour;
      public   HeroBase    Backside;
      public   HeroBase    Hand;
      public   HeroBase    Foot;
   }
}
