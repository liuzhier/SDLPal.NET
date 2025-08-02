using SDL3;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalMap;
using static PalSave;
using static PalVideo;
using static SafeSys;
using static SDL3.TTF;

public unsafe class PalResource
{
   public   static   LoadFlag          _LoadFlag = LoadFlag.None;
   public   static   List<nint>[]      arrRoleSprite    = null;
   public   static   List<nint>[]      arrEventSprite   = null;

   public enum LoadFlag
   {
      None           = 0,
      GlobalData     = (1 << 0),    // Load global data
      Scene          = (1 << 1),    // Load a scene
      RoleSprite     = (1 << 2),    // Load role sprites
   }

   public static void
   Init()
   /*++
     Purpose:

       Initialze the resource manager.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      PalMap.Init();
   }

   public static void
   FreeNpcSprite(
      List<nint>[]      arrSprite
   )
   /*++
     Purpose:
   
       Free all sprites.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      int            i, j;

      if (arrSprite == null) return;

      for (i = 0; i < arrSprite.Length; i++)
      {
         if (arrSprite[i] == null)
         {
            continue;
         }

         for (j = 0; j < arrSprite[i].Count; j++)
         {
            SF_Texture(arrSprite[i][j]);

            arrSprite[i][j] = 0;
         }

         arrSprite[i] = null;
      }

      arrSprite = null;
   }

   public static void
   FreeRoleSprite()
   /*++
     Purpose:
   
       Free all player sprites.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      FreeNpcSprite(arrRoleSprite);
   }

   public static void
   FreeEventSprite()
   /*++
     Purpose:

       Free all sprites of event objects on the scene.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      FreeNpcSprite(arrEventSprite);
   }

   public static void
   Free()
   /*++
     Purpose:

       Free all loaded resources.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      //
      // Free all loaded sprites
      //
      FreeRoleSprite();
      FreeEventSprite();

      //
      // Release the memory occupied by the map
      //
      PalMap.Free();
   }

   public static void
   SetLoadFlags(
      LoadFlag flag
   )
   /*++
     Purpose:

       Set flags to load resources.

     Parameters:

       [IN]  flag - flags to be set.

     Return value:

       None.

   --*/
   {
      _LoadFlag |= flag;
   }

   public static void
   Load()
   /*++
     Purpose:

       Load the game resources if needed.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      int               i, j, index, idSprite;
      PalSave           save;
      Scene             scene;
      List<Event>       listEvent;
      Party[]           arrParty;
      List<Follower>    listFollower;

      if (_LoadFlag == LoadFlag.None)
      {
         //
         // No resources need to be loaded
         //
         return;
      }

      //
      // Load global data
      //
      if (S_B(_LoadFlag & LoadFlag.GlobalData))
      {
         //
         // Read the save slot
         //
         PalGlobal.Init(PalGlobal.CurrSaveID);
         PalAudio.PlayMusic(S_GetSave().MusicID);
      }

      save = S_GetSave();

      //
      // Load scene
      //
      if (S_B(_LoadFlag & LoadFlag.Scene))
      {
         //
         // Free previous loaded scene (sprites and map)
         //
         FreeEventSprite();
         PalMap.FreeTile();

         //
         // Load map
         //
         scene = save.CurrScene;
         PalMap.Load(scene.MapID);

         //
         // bug (game feature) : Allows one step ahead
         //
         PalScene.UpdateParty();

         //
         // Load sprites
         //
         listEvent = scene.listEvent;
         arrEventSprite = new List<nint>[listEvent.Count];

         for (i = 1; i < arrEventSprite.Length; i++)
         {
            arrEventSprite[i] = [];
         }

         for (i = 1; i < arrEventSprite.Length; i++)
         {
            idSprite = listEvent[i]._Frame.SpriteID;

            if (idSprite == 0) continue;

            listEvent[i]._Frame.Trail.SpriteFramesAuto = LoadNpcSprite(arrEventSprite[i], idSprite);
            //LoadNpcSprite(arrEventSprite[i], idSprite);
         }
      }

      //
      // Load player sprites
      //
      if (S_B(_LoadFlag & LoadFlag.RoleSprite))
      {
         //
         // Free previous loaded player sprites
         //
         FreeRoleSprite();

         arrParty = save.arrParty;
         listFollower = save.listFollower;
         arrRoleSprite = new List<nint>[arrParty.Length + listFollower.Count];

         for (i = 0; i < arrRoleSprite.Length; i++)
         {
            arrRoleSprite[i] = [];
         }

         for (i = 0; i < save.PartySize; i++)
         {
            //
            // Load the follower sprite
            //
            index = arrParty[i].HeroID;

            idSprite = save._Entity.Hero[index]._HeroBase.SpriteID;

            arrParty[i].Trail.SpriteFramesAuto = LoadNpcSprite(arrRoleSprite[i], idSprite);
         }

         for (j = 0; j < listFollower.Count; j++)
         {
            idSprite = listFollower[j].BitmapID;

            //idSprite = 2;

            LoadNpcSprite(arrRoleSprite[i + j] , idSprite);
         }
      }

      //
      // Clear all of the load flags
      //
      _LoadFlag = LoadFlag.None;
   }

   public static int
   LoadNpcSprite(
      List<nint>     npcSprite,
      int            iSpriteID
   )
   {
      int         i;
      float       fw, fh;
      string      path, imgpath;
      nint        pTex, pTex2;
      bool        fLoadOld;

      path = $@"New_{IMG_CHAR_PATH}\{iSpriteID}";

      fLoadOld = !Directory.Exists(path);

      if (fLoadOld)
      {
         //
         // The new version of the image does not exist.
         // Try loading the old version of the image
         //
         path = $@"{IMG_CHAR_PATH}\{iSpriteID}";

         S_DIR_EXISTS(path);
      }

      for (i = 0; ; i++)
      {
         imgpath = $@"{path}\{i}.png";

         if (!File.Exists(imgpath))
         {
            break;
         }

         pTex = SC_Texture(imgpath);

         if (fLoadOld)
         {
            S_GetTexSize(pTex, out fw, out fh);
            pTex2 = SC_Texture((int)fw * 2, (int)fh * 2, SDL.PixelFormat.RGBA8888, 2);
            Screen.Copy(pTex, pTex2, true);
            SF_Texture(pTex);
            pTex = pTex2;
         }

         npcSprite.Add(pTex);
      }

      return i;
   }

   public static nint
   GetNpcSprite(
      bool     fIsRole,
      int      spriteId,
      int      frameID
   )
   {
      List<nint>        listSprite;
      nint              pTex;

      listSprite = fIsRole ? arrRoleSprite[spriteId] : arrEventSprite[spriteId];

      pTex = (frameID > listSprite.Count - 1) ? 0 : listSprite[frameID];

      return pTex;
   }
}
