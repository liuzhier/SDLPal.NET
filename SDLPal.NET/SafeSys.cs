using SDL3;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.JavaScript;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using static PalCommon;
using static PalConfig;
using static PalMap;
using static PalSave;
using static PalVideo;

public unsafe class SafeSys
{
   [DllImport("msvcrt.dll")]
   private static extern nint
   memset(nint dst, int c, long len);

   [DllImport("msvcrt.dll")]
   private static extern nint
   memcpy(nint dst, nint src, long len);

   [DllImport("msvcrt.dll")]
   private static extern nint
   memmove(nint dst, nint src, long len);

   public static bool
   S_B(
      decimal     val
   )
   {
      return val != 0;
   }

   public static bool
   S_B(
      object      obj
   )
   {
      bool     ret;

      ret = false;

      try
      {
         ret = S_B((int)obj);
      }
      catch
      {
         S_FAILED(
            "S_B",
            $" The object '{obj}' is not an integer"
         );
      }

      return ret;
   }

   public static void
   S_MSGBOX(
      string msg,
      string tile = "SDLPal.Net Log"
   )
   {
      //
      // 提示出错
      //
      SDL.ShowSimpleMessageBox(
         0,
         tile,
         msg,
         g_pWindow
      );
   }

   public static void
   S_FAILED(
      string      funcName,
      string      error,
      bool        fIsCorrect = false
   )
   {
      string      logFatal;

      //
      // If there is no error, return directly
      //
      if (fIsCorrect) return;

      logFatal = $"{funcName} failed: {error}";

      if (error.Last() != '.')
      {
         logFatal += '.';
      }

      //
      // Write the error message to the log
      //
      PalLog.Go(
         logFatal,
         PalLog.Level.Error
      );

      //
      // Prompt error
      //
      SDL.ShowSimpleMessageBox(
         SDL.MessageBoxFlags.Error,
         "FATAL ERROR:",
         logFatal,
         g_pWindow
      );

      //
      // Encountered an error and quit the game
      //
      PalMain.Free();
   }

   public static void
   SDL_FAILED(
      string      funcName,
      bool        fIsCorrect
   )
   {
      string      error;
      //
      // If there is no error, return directly
      //
      if (fIsCorrect) return;

      error = SDL.GetError();

      SDL.LogError(SDL.LogCategory.Application, $"{funcName} failed: {error}.");
      S_FAILED(funcName, error);
   }

   public static void
   SDL_FAILED(
      string      funcName,
      void*       ptr
   )
   {
      //
      // If it is a null pointer, it indicates a failure
      //
      SDL_FAILED(funcName, ptr != null);
   }

   public static void
   SDL_FAILED(
      string      funcName,
      nint        ptr
   )
   {
      //
      // If it is a null pointer, it indicates a failure
      //
      SDL_FAILED(funcName, ptr != 0);
   }

   public static void
   S_FILE_EXISTS(
      string      path
   )
   {
      if (File.Exists(path)) return;

      S_FAILED(
         "S_FILE_EXISTS",
         $@"The file '{path}' does not exist"
      );
   }

   public static void
   S_MKDIR(
      string      path,
      bool        fDelExists = false
   )
   {
      try
      {
         if (fDelExists)
         {
            if (Directory.Exists(path))
            {
               Directory.Delete(path, true);
            }

            Directory.CreateDirectory(path);
         }
         else
         {
            if (!Directory.Exists(path))
            {
               Directory.CreateDirectory(path);
            }
         }
      }
      catch (Exception e)
      {
         S_FAILED(
            "S_MKDIR",
            e.Message
         );
      }
   }

   public static string
   S_GetCurrDate()
   {
      string      time;
      DateTime    now;

      time = "";
      now = DateTime.Now;

      try
      {
         time = string.Format(
            "{0}-{1}-{2}",
            now.Year, now.Month, now.Day
         );
      }
      catch (Exception e)
      {
         S_FAILED(
            "S_GetCurrTime",
            e.Message
         );
      }

      return time;
   }

   public static string
   S_GetCurrTime()
   {
      string time;
      DateTime now;

      time = "";
      now = DateTime.Now;

      try
      {
         time = string.Format(
            "{0}-{1}-{2}_{3}",
            now.Hour, now.Minute, now.Second, now.Millisecond
         );
      }
      catch (Exception e)
      {
         S_FAILED(
            "S_GetCurrTime",
            e.Message
         );
      }

      return time;
   }

   public static void
   S_FREE(
      nint     pSrc
   )
   /*++
     Purpose:

       Release the memory area.

     Parameters:

       [IN] pSrc - Pointer to the src buffer.

     Return value:

       None.

   --*/
   {
      if (pSrc != 0)
      {
         Marshal.FreeHGlobal(pSrc);
      }
   }

   public static void
   S_FREE(
      ref   nint     pSrc
   )
   /*++
     Purpose:

       Release the memory area.

     Parameters:

       [OUT] pSrc - Pointer to the src buffer.

     Return value:

       None.

   --*/
   {
      if (pSrc != 0)
      {
         S_FREE(pSrc);

         pSrc = 0;
      }
   }

   public static void
   S_FREE(
      void*    lpSrc
   )
   /*++
     Purpose:

       Release the memory area.

     Parameters:

       [OUT] lpSrc - Pointer to the src buffer.

     Return value:

       None.

   --*/
   {
      if (lpSrc != null)
      {
         Marshal.FreeHGlobal((nint)lpSrc);
      }
   }

   public static nint
   S_MEMCPY(
      nint     pSrc,
      nint     pDest,
      long     len
   )
   /*++
     Purpose:

       Copy the memory area.

     Parameters:

       [IN] pSrc - Pointer to the src buffer.
       [IN] pDest - Pointer to the dest buffer.
       [IN] len - The length of the memory area.

     Return value:

       Pointer to the dest buffer.

   --*/
   {
      return memcpy(pDest, pSrc, len);
   }

   public static nint
   S_MEMSET(
      nint     pSrc,
      int      value,
      long     len
   )
   /*++
     Purpose:

       Fill the memory area.

     Parameters:

       [IN] pSrc - Pointer to the src buffer.
       [IN] value - The value to be filled.
       [IN] len - The length of the memory area.

     Return value:

       Pointer to the dest buffer.

   --*/
   {
      return memset(pSrc, value, len);
   }

   public static nint
   S_MEMMOVE(
      nint     pSrc,
      nint     pDest,
      long     len
   )
   /*++
     Purpose:

       Copy the memory area, Ignore memory overlap.

     Parameters:

       [IN] pSrc - Pointer to the src buffer.
       [IN] pDest - Pointer to the dest buffer.
       [IN] len - The length of the memory area.

     Return value:

       Pointer to the dest buffer.

   --*/
   {
      return memmove(pDest, pSrc, len);
   }

   public static nint
   S_MALLOC(
      int      len
   )
   /*++
     Purpose:

       Initialize unmanaged memory.

     Parameters:

       [IN] len - The size of the buffer to be allocated.

     Return value:

       Pointer to the dest buffer.

   --*/
   {
      nint     pDest;

      pDest = Marshal.AllocHGlobal(len);

      return S_MEMSET(pDest, 0, len);
   }

   public static void
   S_ARRCPY(
      Array    arr,
      nint     pDest,
      long     len = -1
   )
   {
      if (pDest != 0) Marshal.FreeHGlobal(pDest);

      S_ARRCPY(arr, out pDest, len);
   }

   public static void
   S_ARRCPY(
         Array    arr,
   out   nint     pDest,
         long     len = -1
   )
   {
      int i;

      byte[] aaa = (byte[])arr;

      if (len <= 0) len = aaa.LongLength;

      pDest = S_MALLOC((int)len + 1);
      byte* b = (byte*)pDest;

      for (i = 0; i < len; i++)
      {
         b[i] = aaa[i];
      }
   }

   public static nint
   SC_AudioSpec(
      SDL.AudioSpec     audioSpec
   )
   {
      nint              pAudioSpec;
      SDL.AudioSpec*    lpAudioSpec;

      pAudioSpec = S_MALLOC(sizeof(SDL.AudioSpec));
      lpAudioSpec = (SDL.AudioSpec*)pAudioSpec;

      lpAudioSpec->Format = audioSpec.Format;
      lpAudioSpec->Channels = audioSpec.Channels;
      lpAudioSpec->Freq = audioSpec.Freq;

      return pAudioSpec;
   }

   private  static   Dictionary<uint, SDL.Color>      dictColor   = new Dictionary<uint, SDL.Color>();

   public static SDL.Color
   SC_Color(
      uint     val
   )
   {
      SDL.Color      color;

      if (!dictColor.TryGetValue(val, out color))
      {
         color = new SDL.Color
         {
            R = (byte)(val >> (3 * 8) & 0xFF),
            G = (byte)(val >> (2 * 8) & 0xFF),
            B = (byte)(val >> (1 * 8) & 0xFF),
            A = (byte)(val & 0xFF),
         };

         //
         // Put into the color cache list
         // Avoid creating color objects frequently
         // Take out the reference directly when needed
         //
         dictColor[val] = color;
      }

      return color;
   }

   public static uint
   SC_MapSurfaceRGB(
      nint     lpSurface,
      uint     val
   )
   {
      return SDL.MapSurfaceRGB(
         lpSurface,
         (byte)(val >> (2 * 8) & 0xFF),
         (byte)(val >> (1 * 8) & 0xFF),
         (byte)(val & 0xFF)
      );
   }


   public static nint
   SC_Surface(
      int                  w,
      int                  h,
      SDL.PixelFormat      format
   )
   {
      nint     pSurface;

      SDL_FAILED(
         "SDL.CreateSurface",
         pSurface = SDL.CreateSurface(w, h, format)
      );

      return pSurface;
   }

   public static nint
   SC_Surface(
      string      path
   )
   {
      nint     pSurface;

      SDL_FAILED(
         "Image.Load",
         pSurface = Image.Load(path)
      );

      return pSurface;
   }

   public static void
   SF_Surface(
      nint     lpSrc
   )
   {
      SDL.DestroySurface(lpSrc);
   }

   public static void
   SF_Surface(
   ref   nint     pSurface
   )
   {
      SF_Surface(pSurface);

      pSurface = 0;
   }

   private static nint
   SC_Texture(
      int                  w,
      int                  h,
      SDL.PixelFormat      format,
      SDL.TextureAccess    access
   )
   {
      nint     pTexture;

      SDL_FAILED(
         "SDL.CreateTexture",
         pTexture = SDL.CreateTexture(g_pRenderer, format, access, w, h)
      );

      return pTexture;
   }

   public static nint
   SC_Texture(
      int                  w,
      int                  h,
      SDL.PixelFormat      format,
      int                  iLockedMod  = 0
   )
   {
      nint     pTexture;

      pTexture = SC_Texture(w, h, format, (SDL.TextureAccess)iLockedMod);

      return pTexture;
   }

   private static nint
   SC_TextureL(
      nint     pSurface,
      bool     fFree = true
   )
   {
      nint     pTexture;

      SDL_FAILED(
         "SDL.CreateTexture",
         pTexture = SDL.CreateTextureFromSurface(g_pRenderer, pSurface)
      );

      if (fFree)
      {
         SF_Surface(ref pSurface);
      }

      return pTexture;
   }

   public static nint
   SC_Texture(
      nint              pSurface,
      int               iLockedMod  = 0,
      bool              fFree       = true
   )
   {
      nint              pTexture;
      SDL.Surface*      lpSurface;

      if (!S_B(iLockedMod))
      {
         pTexture = SC_TextureL(pSurface);
      }
      else
      {
         lpSurface = (SDL.Surface*)pSurface;

         pTexture = SC_Texture(lpSurface->Width, lpSurface->Height, lpSurface->Format, iLockedMod);

         if (fFree)
         {
            SF_Surface(ref pSurface);
         }
      }

      return pTexture;
   }

   public static nint
   SC_Texture(
      string      path
   )
   {
      return SC_TextureL(SC_Surface(path));
   }

   public static void
   SF_Texture(
      nint     pTexture
   )
   {
      SDL.DestroyTexture(pTexture);
   }

   public static void
   SF_Texture(
   ref   nint     pSrc
   )
   {
      SF_Texture(pSrc);

      pSrc = 0;
   }

   public static nint
   SC_Rect(
      SDL.Rect    rect
   )
   {
      SDL.Rect*      lpRect;

      lpRect = (SDL.Rect*)S_MALLOC(sizeof(SDL.Rect));

      lpRect->X = rect.X;
      lpRect->Y = rect.Y;
      lpRect->W = rect.W;
      lpRect->H = rect.H;

      return (nint)lpRect;
   }

   public static nint
   SC_FRect(
      SDL.FRect      frect
   )
   {
      SDL.FRect*     lpFRect;

      lpFRect = (SDL.FRect*)S_MALLOC(sizeof(SDL.FRect));

      lpFRect->X = frect.X;
      lpFRect->Y = frect.Y;
      lpFRect->W = frect.W;
      lpFRect->H = frect.H;

      return (nint)lpFRect;
   }

   public static void
   S_GetTexSize(
         nint     texture,
   out   float    fw,
   out   float    fh
   )
   {
      SDL_FAILED(
         "GetTextureSize",
         SDL.GetTextureSize(texture, out fw, out fh)
      );
   }

   public static int
   S_Ratio(
      int      val
   )
   {
      return val * MAP_RATIO;
   }

   public static int
   S_UnRatio(
      int      val
   )
   {
      return val / MAP_RATIO;
   }

   public static void
   S_SetTexScale(
      nint              texture,
      SDL.ScaleMode     scaleMode
   )
   {
      SDL.SetTextureScaleMode(texture, scaleMode);
   }

   public static bool
   S_RectCover(
      SDL.Rect    a,
      SDL.Rect    b
   )
   {
      return SDL.HasRectIntersection(in a, in b);
   }

   public static bool
   S_FRectCover(
      SDL.FRect      a,
      SDL.FRect      b
   )
   {
      return SDL.HasRectIntersectionFloat(in a, in b);
   }

   public static void
   S_SetNearestScale(
      bool     fNearest = true
   )
   {
      SDL_FAILED(
         "SDL.SetDefaultTextureScaleMode",
         SDL.SetDefaultTextureScaleMode(g_pRenderer, fNearest ? SDL.ScaleMode.Nearest : g_Config.video._ScaleMode)
      );
   }

   //public static int
   //S_ScrAddr(
   //   string      strSrcTag
   //)
   //{
   //   return S_INT(strSrcTag.Split("Scr_")[1].Trim());
   //}

   public static bool
   S_BOOL(
      string      strVal
   )
   {
      bool     val;

      if (!bool.TryParse(strVal, out val))
      {
         S_FAILED(
            "S_BOOL",
            $@"The string '{strVal}' is not a Boolean value"
         );
      }

      return val;
   }

   public static bool
   S_IsHex(
   ref   string      strVal
   )
   {
      bool     fIsHex;

      fIsHex = strVal.StartsWith("0x");

      if (fIsHex)
      {
         strVal = strVal.Split("0x")[1].ToUpper();
      }

      return fIsHex;
   }

   public static byte
   S_BYTE(
      string      strVal
   )
   {
      byte     val;

      val = 0;

      try
      {
         val = Convert.ToByte(strVal, S_IsHex(ref strVal) ? 16 : 10);
      }
      catch
      {
         S_FAILED(
            "S_BYTE",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static short
   S_SHORT(
      string      strVal
   )
   {
      short    val;

      val = 0;

      try
      {
         val = Convert.ToInt16(strVal, S_IsHex(ref strVal) ? 16 : 10);
      }
      catch
      {
         S_FAILED(
            "S_SHORT",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static int
   S_INT(
      string      strVal
   )
   {
      int      val;

      val = 0;

      try
      {
         val = Convert.ToInt32(strVal, S_IsHex(ref strVal) ? 16 : 10);
      }
      catch
      {
         S_FAILED(
            "S_INT",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static int
   S_INT(
      char     strVal
   )
   {
      return S_INT(strVal.ToString());
   }

   public static uint
   S_DWORD(
      string      strVal
   )
   {
      uint     val;
      bool     fIsHex;

      val = 0;

      try
      {
         val = Convert.ToUInt32(strVal, S_IsHex(ref strVal) ? 16 : 10);
      }
      catch
      {
         S_FAILED(
            "S_DWORD",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static float
   S_FLT(
      string      strVal
   )
   {
      float    val;

      val = 0;

      try
      {
         val = Convert.ToSingle(strVal);
      }
      catch
      {
         S_FAILED(
            "S_FLT",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static Trail
   S_GetPartyTrail()
   {
      return PalGlobal.Save.PartyTrail;
   }

   public static Pos
   S_GetPartyPos()
   {
      return S_GetPartyTrail().Pos;
   }

   public static void
   S_SetPartyPos(
      int      x,
      int      y
   )
   {
      Pos      pos;

      pos = S_GetPartyPos();

      pos.X = x;
      pos.Y = y;

      PalScene.UpdateTeamPosNeat();
   }

   public static void
   S_SetPartyPos(
      Pos      pos
   )
   {
      S_SetPartyPos(pos.X, pos.Y);
   }

   public static PalDirection
   S_GetPartyDirection()
   {
      return S_GetPartyTrail().Direction;
   }

   public static void
   S_SetPartyDirection(
      PalDirection      dir
   )
   {
      S_GetPartyTrail().Direction = dir;
      S_GetRoleTrail(0).Direction = dir;
   }

   public static Party
   S_GetRole(
      int      roleID
   )
   {
      Party[]     arrParty;

      arrParty = PalGlobal.Save.arrParty;

      if (roleID < 0)
      {
         roleID = arrParty.Length + roleID;
      }

      return arrParty[roleID];
   }

   public static Trail
   S_GetRoleTrail(
      int      roleID
   )
   {
      return S_GetRole(roleID)._Trail;
   }

   public static Pos
   S_GetRolePos(
      int      roleID
   )
   {
      return S_GetRoleTrail(roleID).Pos;
   }

   public static void
   S_SetRolePos(
      int      roleID,
      int      x,
      int      y
   )
   {
      Pos      posRole;

      posRole = S_GetRolePos(roleID);

      posRole.X = x;
      posRole.Y = y;
   }

   public static void
   S_SetRolePos(
      int      roleID,
      Pos      pos
   )
   {
      S_SetRolePos(roleID, pos.X, pos.Y);
   }

   public static PalDirection
   S_GetRoleDirection(
      int      roleID
   )
   {
      return S_GetRoleTrail(roleID).Direction;
   }

   public static void
   S_SetRoleDirection(
      int               roleID,
      PalDirection      dir
   )
   {
      if (roleID == 0)
      {
         S_SetPartyDirection(dir);
      }

      S_GetRoleTrail(roleID).Direction = dir;
   }

   public static Follower
   S_GetFollower(
      int      followerID
   )
   {
      List<Follower>    listFollower;

      listFollower = PalGlobal.Save.listFollower;

      if (followerID < 0)
      {
         followerID = listFollower.Count + followerID;
      }

      return listFollower[followerID];
   }

   public static Trail
   S_GetFollowerTrail(
      int      followerID
   )
   {
      return S_GetFollower(followerID)._Trail;
   }

   public static Pos
   S_GetFollowerPos(
      int      followerID
   )
   {
      return S_GetFollowerTrail(followerID).Pos;
   }

   public static void
   S_SetFollowerPos(
      int      followerID,
      int      x,
      int      y
   )
   {
      Pos      posFollower;

      posFollower = S_GetFollowerPos(followerID);

      posFollower.X = x;
      posFollower.Y = y;
   }

   public static void
   S_SetFollowerPos(
      int      followerID,
      Pos      pos
   )
   {
      S_SetFollowerPos(followerID, pos.X, pos.Y);
   }

   public static PalDirection
   S_GetFollowerDirection(
      int      followerID
   )
   {
      return S_GetFollowerTrail(followerID).Direction;
   }

   public static void
   S_SetFollowerDirection(
      int               followerID,
      PalDirection      dir
   )
   {
      S_GetFollowerTrail(followerID).Direction = dir;
   }

   public static Event
   S_GetEvent(
      int      iSceneID,
      int      iEvtID
   )
   {
      Scene    scene;

      if (iEvtID == -1)
      {
         return null;
      }

      if (iSceneID == -1)
      {
         scene = PalGlobal.Save.CurrScene;
      }
      else
      {
         scene = PalGlobal.Save.listScene[iSceneID];
      }

      return scene.listEvent[iEvtID];
   }

   public static Trail
   S_GetEventTrail(
      int      iSceneID,
      int      iEvtID
   )
   {

      if (iEvtID == -1)
      {
         return null;
      }

      return S_GetEvent(iSceneID, iEvtID)._Frame._Trail;
   }

   public static bool
   S_InventoryAddItem(
      int      itemID,
      int      num
   )
   {
      List<Inventory>      listInventory;
      Inventory            item;

      if (itemID == 0)
      {
         return false;
      }

      if (num == 0)
      {
         num = 1;
      }

      listInventory = PalGlobal.Save.listInventory;
      item = listInventory.Find(x => x.Item == PalGlobal.Save._Entity.Item[itemID]);

      if (num > 0)
      {
         if (item == null)
         {
            listInventory.Add(new Inventory
            {
               Item = PalGlobal.Save._Entity.Item[itemID],
               Amount = num,
            });
         }
         else
         {
            item.Amount += num;
         }
      }
      else
      {
         if (item == null || item.Amount < num)
         {
            return false;
         }
         else
         {
            item.Amount -= num;

            if (item.Amount == 0)
            {
               listInventory.Remove(item);
            }
         }
      }

      return true;
   }

   public static void
   S_CleanUpTex(
      nint     pTex,
      uint     dwHexColor  = 0x00000000
   )
   {
      SDL.SetTextureBlendMode(g_pRenderer, SDL.BlendMode.None);
      {
         SDL.SetRenderDrawColor(
            g_pRenderer,
            (byte)((dwHexColor >> (8 * 3)) & 0xFF),
            (byte)((dwHexColor >> (8 * 2)) & 0xFF),
            (byte)((dwHexColor >> (8 * 1)) & 0xFF),
            (byte)((dwHexColor >> (8 * 0)) & 0xFF)
         );
         SDL.SetRenderTarget(g_pRenderer, pTex);
         SDL.RenderClear(g_pRenderer);
      }
      SDL.SetTextureBlendMode(g_pRenderer, SDL.BlendMode.Blend);
   }

   public static int
   S_GetTextSize(
      string      strText
   )
   {
      int i, nLineWord;
      char charWord;

      nLineWord = strText.Length;

      for (i = 0; i < strText.Length; i++)
      {
         charWord = strText[i];

         switch (charWord)
         {
            case '-':
            case '@':
            case '\'':
            case '\"':
            case '$':
               nLineWord--;
               break;

            default:
               break;
         }
      }

      return nLineWord;
   }

   public static Hero
   S_GetHero(
      int      heroID
   )
   {
      return PalGlobal.Save._Entity.Hero[heroID];
   }

   public static Item
   S_GetItem(
      int      itemID
   )
   {
      return PalGlobal.Save._Entity.Item[itemID];
   }
}
