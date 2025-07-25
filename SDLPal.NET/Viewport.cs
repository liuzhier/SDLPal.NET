using Newtonsoft.Json.Linq;
using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalMap;
using static SafeSys;
using static PalVideo;

public class Viewport
{
   public   static   Pos         Offset         = new Pos     // Viewport coordinate offset
   {
      X = 0,
      Y = 0,
   };

   public   static   SDL.Rect    Rect           = new SDL.Rect
   {
      X = -S_UnRatio(VIDEO_WIDTH) / 2,
      Y = -(S_UnRatio(VIDEO_HEIGHT) / 2 + S_Ratio(10)),
      W = VIDEO_WIDTH,
      H = VIDEO_HEIGHT,
      //X = -(384 / 2),
      //Y = -(280 / 2 + 16 + 4),
      //W = 384,
      //H = 280,
   };

   private  static   Pos      _PosR             = new Pos(0, 0);
   public   static   Pos      PosR
   {
      get
      {
         _PosR.X = S_Ratio(Pos.X);
         _PosR.Y = S_Ratio(Pos.Y);

         return _PosR;
      }
   }

   private  static   Pos      _Pos              = new Pos(0, 0);
   public   static   Pos      Pos
   {
      get
      {
         Pos      posParty;

         posParty = S_GetPartyPos();

         _Pos.X = PosV.X + posParty.X;
         _Pos.Y = PosV.Y + posParty.Y;

         _Pos.X = int.Max(_Pos.X, 0);
         _Pos.Y = int.Max(_Pos.Y, 0);

         _Pos.X = int.Min(_Pos.X, VIEWPORT_MAX_X);
         _Pos.Y = int.Min(_Pos.Y, VIEWPORT_MAX_Y);

         return _Pos;
      }
   }
   
   private  static   Pos      _PosV             = new Pos(0, 0);
   public   static   Pos      PosV
   {
      get
      {
         _PosV.X = Rect.X + Offset.X;
         _PosV.Y = Rect.Y + Offset.Y;

         return _PosV;
      }
   }

   public   static   int      VIEWPORT_MAX_X    => MAP_WIDTH - S_UnRatio(VIDEO_WIDTH) - 32;
   public   static   int      VIEWPORT_MAX_Y    => MAP_HEIGHT - S_UnRatio(VIDEO_HEIGHT) - 16;
}
