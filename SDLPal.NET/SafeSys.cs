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
using System.Xml.Linq;

using static HeroBase;
using static PalCommon;
using static PalConfig;
using static PalMap;
using static PalSave;
using static PalVideo;
using static System.Runtime.InteropServices.JavaScript.JSType;

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
   S_MEMSET(
      Array    arr,
      int      value,
      long     len   = -1
   )
   {
      if (len == -1)
      {
         len = arr.LongLength;
      }

      fixed (byte* pTmp = (byte[])arr)
      {
         return S_MEMSET((nint)pTmp, value, len);
      }
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
   S_SetLinearScale(
      bool     fLinear  = true
   )
   {
      SDL_FAILED(
         "SDL.SetDefaultTextureScaleMode",
         SDL.SetDefaultTextureScaleMode(g_pRenderer, fLinear ? SDL.ScaleMode.Linear : g_Config.video._ScaleMode)
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

   private static ReadOnlySpan<char>
   S_CheckHex(
         string            strVal,
   out   NumberStyles      numberStyles
   )
   {
      ReadOnlySpan<char>      span;

      span = strVal.AsSpan().Trim();

      if (span.StartsWith("0x", StringComparison.OrdinalIgnoreCase))
      {
         span = span.Slice(2);

         numberStyles = NumberStyles.HexNumber;
      }
      else
      {
         numberStyles = NumberStyles.Integer;
      }

      return span;
   }

   public static char
   S_CHAR(
      string      strVal
   )
   {
      char     val;

      val = '\0';

      if (!char.TryParse(strVal, out val))
      {
         S_FAILED(
            "S_BYTE",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static byte
   S_BYTE(
      string      strVal
   )
   {
      byte                    val;
      ReadOnlySpan<char>      span;
      NumberStyles            numberStyles;

      span = S_CheckHex(strVal, out numberStyles);

      val = 0;

      if (!byte.TryParse(span, numberStyles, CultureInfo.InvariantCulture, out val))
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
      short                   val;
      ReadOnlySpan<char>      span;
      NumberStyles            numberStyles;

      span = S_CheckHex(strVal, out numberStyles);

      val = 0;

      if (!short.TryParse(span, numberStyles, CultureInfo.InvariantCulture, out val))
      {
         S_FAILED(
            "S_SHORT",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static ushort
   S_WORD(
      string      strVal
   )
   {
      ushort                  val;
      ReadOnlySpan<char>      span;
      NumberStyles            numberStyles;

      span = S_CheckHex(strVal, out numberStyles);

      val = 0;

      if (!ushort.TryParse(span, numberStyles, CultureInfo.InvariantCulture, out val))
      {
         S_FAILED(
            "S_WORD",
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
      int                     val;
      ReadOnlySpan<char>      span;
      NumberStyles            numberStyles;

      span = S_CheckHex(strVal, out numberStyles);

      val = 0;

      if (!int.TryParse(span, numberStyles, CultureInfo.InvariantCulture, out val))
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
      uint                    val;
      ReadOnlySpan<char>      span;
      NumberStyles            numberStyles;

      span = S_CheckHex(strVal, out numberStyles);

      val = 0;

      if (!uint.TryParse(span, numberStyles, CultureInfo.InvariantCulture, out val))
      {
         S_FAILED(
            "S_DWORD",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static long
   S_LONG(
      string      strVal
   )
   {
      long                    val;
      ReadOnlySpan<char>      span;
      NumberStyles            numberStyles;

      span = S_CheckHex(strVal, out numberStyles);

      val = 0;

      if (!long.TryParse(span, numberStyles, CultureInfo.InvariantCulture, out val))
      {
         S_FAILED(
            "S_SHORT",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static ulong
   S_QWORD(
      string      strVal
   )
   {
      ulong                   val;
      ReadOnlySpan<char>      span;
      NumberStyles            numberStyles;

      span = S_CheckHex(strVal, out numberStyles);

      val = 0;

      if (!ulong.TryParse(span, numberStyles, CultureInfo.InvariantCulture, out val))
      {
         S_FAILED(
            "S_DWORD",
            $@"The string '{strVal}' is not a number"
         );
      }

      return val;
   }

   public static float
   S_FLOAT(
      string      strVal
   )
   {
      float                   val;
      ReadOnlySpan<char>      span;

      span = strVal;

      val = 0;

      if (!float.TryParse(span, NumberStyles.Float | NumberStyles.AllowThousands,
         CultureInfo.InvariantCulture, out val))
      {
         S_FAILED(
            "S_FLOAT",
            $@"The string '{strVal}' is not a floating-point number"
         );
      }

      return val;
   }

   public static int
   S_GetDigitCount(
      int      num
   )
   {
      int      value;

      if (num == 0) return 1;

      //
      // Handle negative numbers
      //
      value = Math.Abs(num);

      //
      // Logarithmic formula: floor(log10(n)) + 1
      //
      return (int)Math.Floor(Math.Log10(value)) + 1;
   }

   //
   // Calculate in advance 10 to the power of 19
   //
   private static readonly long[] PowersOf10 =
   {
        1L,                   // 10^0
        10L,                  // 10^1
        100L,                 // 10^2
        1000L,                // 10^3
        10000L,               // 10^4
        100000L,              // 10^5
        1000000L,             // 10^6
        10000000L,            // 10^7
        100000000L,           // 10^8
        1000000000L,          // 10^9
        10000000000L,         // 10^10
        100000000000L,        // 10^11
        1000000000000L,       // 10^12
        10000000000000L,      // 10^13
        100000000000000L,     // 10^14
        1000000000000000L,    // 10^15
        10000000000000000L,   // 10^16
        100000000000000000L,  // 10^17
        1000000000000000000L  // 10^18
    };

   public static int
   S_GetDigitVal(
      long     num,
      int      pos
   )
   {
      long     absValue;
      long     divisor;

      absValue = Math.Abs(num);
      divisor = PowersOf10[pos];

      if (absValue < divisor) return 0;

      return (int)((absValue / divisor) % 10);
   }

   public static PalSave
   S_GetSave()
   {
      return PalGlobal.Save;
   }

   public static Trail
   S_GetPartyTrail()
   {
      return S_GetSave().PartyTrail;
   }

   public static Pos
   S_GetPartyPos()
   {
      return S_GetPartyTrail().Pos;
   }

   public static BlockPos
   S_GetPartyBPos()
   {
      return S_GetPartyTrail().BPos;
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

      arrParty = S_GetSave().arrParty;

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
      return S_GetRole(roleID).Trail;
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

      listFollower = S_GetSave().listFollower;

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
      return S_GetFollower(followerID).Trail;
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

   public static Scene
   S_GetScene(
      int      iSceneID
   )
   {
      List<Scene>    listScene;

      if (iSceneID == -1)
      {
         return S_GetSave().CurrScene;
      }

      listScene = S_GetSave().listScene;

      if (iSceneID >= listScene.Count)
      {
         S_FAILED(
            "S_GetScene",
            $"Scene {iSceneID} does not exist! The maximum scene number is {listScene.Count}"
         );
      }

      return listScene[iSceneID];
   }

   public static Event
   S_GetEvent(
      int      iSceneID,
      int      iEvtID
   )
   {
      Scene          scene;
      List<Event>    listEvent;

      listEvent = S_GetScene(iSceneID).listEvent;

      if (iEvtID == -1 || iEvtID >= listEvent.Count)
      {
         return null;
      }

      return listEvent[iEvtID];
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

      return S_GetEvent(iSceneID, iEvtID)._Frame.Trail;
   }

   /// 
   /// <summary>
   ///   Add or remove items from the inventory.
   /// </summary>
   /// 
   /// <param name="iItemID">
   ///   [IN] iItemID - object number of the item.
   /// </param>
   /// <param name="iNum">
   ///   [IN] iNum - number to be added (positive value) or removed (negative value).
   /// </param>
   /// 
   /// <returns>
   ///   fIsSuccess: Indicates whether the operation was successful.
   ///   <br/>
   ///   iCount: When the inventory items are removed and the quantity is insufficient,
   ///         count the missing quantity.
   /// </returns>
   /// 
   public static (bool fIsSuccess, int iCount)
   S_InventoryAddItem(
      int      iItemID,
      int      iNum
   )
   {
      bool                 fIsSuccess;
      int                  iCount;
      List<Inventory>      listInventory;
      Inventory            item;

      fIsSuccess = true;
      iCount = 0;

      if (iItemID == 0 || iNum == 0)
      {
         //
         // No operation is required
         //
         goto InventoryAddItem_return;
      }

      listInventory = S_GetSave().listInventory;
      item = listInventory.Find(x => x.ItemID == iItemID);

      if (iNum > 0)
      {
         if (item == null)
         {
            listInventory.Add(new Inventory
            {
               ItemID = iItemID,
               Amount = iNum,
            });
         }
         else
         {
            item.Amount += iNum;
         }

         fIsSuccess = true;
      }
      else
      {
         if (item != null)
         {
            fIsSuccess = item.Amount >= iNum;
            item.Amount += iNum;

            if (item.Amount <= 0)
            {
               //
               // The quantity of inventory items may be insufficient,
               // and the missing quantity needs to be recorded
               //
               iCount = Math.Abs(item.Amount);
               fIsSuccess = (iCount == 0);
               listInventory.Remove(item);
            }
         }
      }

   InventoryAddItem_return:
      return (fIsSuccess, iCount);
   }

   /// 
   /// <summary>
   ///   Count the specified kind of item in the inventory AND in players' equipments.
   /// </summary>
   /// 
   /// <param name="iObjectID">
   ///   [IN]  iObjectID - object number of the item.
   /// </param>
   /// 
   /// <returns>
   ///   Counted value.
   /// </returns>
   /// 
   public static int
   S_InventoryCountItem(
      int      iObjectID
   )
   {
      int            i, j, iCount;
      Hero           hero;
      int*           ipEquip;
      Inventory?     inventory;

      iCount = 0;

      //
      // Search for the specified item in the inventory
      //
      inventory = S_GetSave().listInventory.Find(x => x.ItemID == iObjectID);
      if (inventory != null)
      {
         //
         // This item exists in the inventory
         //
         iCount += inventory.Amount;
      }

      //
      // Search for the designated items among the equipment on the team members
      //
      for (i = 0; i <= S_GetSave().PartySize; i++)
      {
         hero = S_GetHero(S_GetRole(i).HeroID);

         fixed (HeroBase.Equip* lpEquip = &hero._HeroBase._Equip)
         {
            for (j = 0; j < MAX_PLAYER_EQUIPMENTS; j++)
            {
               ipEquip = (int*)lpEquip;

               if (ipEquip[j] == iObjectID)
               {
                  iCount++;
               }
            }
         }
      }

      return iCount;
   }

   public static void
   S_RemoveEquipEffect(
      int            iPlayerRole,
      EquipPart      iEquipPart
   )
   {
      Hero.EquipEffect     equipEffect;

      equipEffect = S_GetRole(iPlayerRole).Hero._EquipEffect;

      switch (iEquipPart)
      {
         case EquipPart.Head:
            equipEffect.Head = new HeroBase();
            break;

         case EquipPart.Body:
            equipEffect.Body = new HeroBase();
            break;

         case EquipPart.Armour:
            equipEffect.Armour = new HeroBase();
            break;

         case EquipPart.Backside:
            equipEffect.Backside = new HeroBase();
            break;

         case EquipPart.Hand:
            equipEffect.Hand = new HeroBase();
            break;

         case EquipPart.Foot:
            equipEffect.Foot = new HeroBase();
            break;
      }
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
      int      i, nLineWord;
      char     charWord;

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

   public static Entity
   S_GetEntity()
   {
      return S_GetSave()._Entity;
   }

   public static Hero
   S_GetHero(
      int      heroID
   )
   {
      return S_GetEntity().Hero[heroID];
   }

   public static Item
   S_GetItem(
      int      itemID
   )
   {
      return S_GetEntity().Item[itemID];
   }

   public static Magic
   S_GetMagic(
      int      magicID
   )
   {
      List<Magic>    Magic;

      Magic = S_GetEntity().Magic;

      if (magicID < 0)
      {
         magicID = Magic.Count - magicID;
      }

      if (magicID >= Magic.Count)
      {
         magicID = magicID % Magic.Count;
      }

      return S_GetEntity().Magic[magicID];
   }

   static readonly DateTime UnixEpoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

   static long
   S_time()
   {
      //
      // Get current UTC time
      //
      DateTime currentTime = DateTime.UtcNow;

      //
      // Calculate time difference from Unix epoch
      //
      TimeSpan elapsed = currentTime - UnixEpoch;

      //
      // Return total seconds as long
      //
      return (long)elapsed.TotalSeconds;
   }

   //
   // Our random number generator's seed.
   //
   static int glSeed = 0;

   static void
   S_lsrand(
      uint     iInitialSeed
   )
   /*++
     Purpose:

       This function initializes the random seed based on the initial seed value passed in the
       iInitialSeed parameter.

     Parameters:

       [IN]  iInitialSeed - The initial random seed.

     Return value:

       None.

   --*/
   {
      //
      // fill in the initial seed of the random number generator
      //
      glSeed = (int)(1664525L * iInitialSeed + 1013904223L);
   }

   static int
   S_lrand()
   /*++
     Purpose:

       This function is the equivalent of the rand() standard C library function, except that
       whereas rand() works only with short integers (i.e. not above 32767), this function is
       able to generate 32-bit random numbers.

     Parameters:

       None.

     Return value:

       The generated random number.

   --*/
   {
      if (glSeed == 0) // if the random seed isn't initialized...
         S_lsrand((uint)S_time()); // initialize it first
      glSeed = (int)(1664525L * glSeed + 1013904223L); // do some twisted math (infinite suite)
      return (int)((glSeed >> 1) + 1073741824L); // and return the result.
   }

   public static int
   S_RandomLong(
      int      from,
      int      to
   )
   /*++
     Purpose:

       This function returns a random integer number between (and including) the starting and
       ending values passed by parameters from and to.

     Parameters:

       from - the starting value.

       to - the ending value.

     Return value:

       The generated random number.

   --*/
   {
      if (to <= from)
         return from;

      return from + S_lrand() / (int.MaxValue / (to - from + 1));
   }

   float
   S_RandomFloat(
      float from,
      float to
   )
   /*++
     Purpose:

       This function returns a random floating-point number between (and including) the starting
       and ending values passed by parameters from and to.

     Parameters:

       from - the starting value.

       to - the ending value.

     Return value:

       The generated random number.

   --*/
   {
      if (to <= from)
         return from;

      return from + (float)S_lrand() / (int.MaxValue / (to - from));
   }
}
