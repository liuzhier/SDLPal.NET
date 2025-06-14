using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalConfig;
using static PalFont;
using static PalInput;
using static PalMap;
using static PalText;
using static PalVideo;
using static SafeSys;

public unsafe class PalText
{
   public   const    int            OUTPUT_DELAY_DEFAULT    = 3;
   private  const    int            TEXT_OFFSET_HAVE_FACE   = 200 + FONT_NAME_OFFSET;
   private  const    int            DLG_TEXT_W              = FONT_OFFSET * 16;
   private  const    int            DLG_TEXT_H              = FONT_OFFSET * 5;
   private  const    int            DLG_FACE_W              = 100;
   private  const    int            DLG_FACE_H              = FONT_OFFSET * 7;
   private  const    int            DLG_FACE_OFFSET_H       = DLG_FACE_H - DLG_TEXT_H;
   private  const    int            DLG_W                   = DLG_TEXT_W + DLG_FACE_W;
   private  const    int            DLG_H                   = DLG_TEXT_H;

   private  static   nint           g_pText, g_pTextShadow;
   private  static   DialogBox      _DialogBox  = DialogBox.Upper;
   private  static   string         strFacePath = "";
   private  static   SDL.Color      colorChar   = COLOR_WHITE;
   private  static   bool           fIsName     = false;
   private  static   int            nLine       = 0;
   private  static   bool           fAutoUpdate = false;
   private  static   int            iDelayTime  = 0;
   private  static   bool           fUserSkip   = false;
   private  static   Pos            posCurr     = new Pos();
   private  static   Pos            posActual   = new Pos();
   private  static   List<Pos>      listTextPos = [
      new Pos((VIDEO_WIDTH - DLG_W) / 2, FONT_OFFSET / 2),           // Upper
      new Pos(VIDEO_WIDTH / 2, VIDEO_HEIGHT / 3),                    // Middle
      new Pos((VIDEO_WIDTH - DLG_W) / 2, VIDEO_HEIGHT - DLG_H - FONT_OFFSET / 2),    // Lower
      new Pos(VIDEO_WIDTH / 2, VIDEO_HEIGHT / 4),                    // Box
   ];
   private  static   List<Pos>      listFacePos = [
      new Pos((VIDEO_WIDTH - DLG_W) / 2, 0),                // Upper
      new Pos(0, 0),                                        // Middle
      new Pos((VIDEO_WIDTH + DLG_W) / 2, VIDEO_HEIGHT),     // Lower
      new Pos(0, 0),                                        // Box
   ];
   private  static   SDL.FRect      frectFace            = new SDL.FRect();

   public enum DialogBox
   {
      Upper = 0,
      Middle,
      Lower,
      Box,
   }

   private static void
   InitText()
   /*++
     Purpose:
   
       Initialize the in-game texts.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {

   }

   public static void
   Init()
   /*++
     Purpose:

       Initialize the text system.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      InitText();
   }

   private static void
   FreeText()
   /*++
     Purpose:

       Free the memory used by the texts.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {

   }

   public static void
   Free()
   /*++
     Purpose:

       Shut down the text system.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      SF_Texture(ref g_pText);
      SF_Texture(ref g_pTextShadow);

      FreeText();
   }

   public static void
   SetDialog(
      DialogBox      dialogBox,
      string         facePath    = "0",
      uint           colorHex    = 0xFFFFFFFF,
      bool           playingRNG  = false
   )
   {
      _DialogBox = dialogBox;
      strFacePath = facePath;
      colorChar = SC_Color(colorHex);
      if (playingRNG)
      {
         Screen.Backup(g_pScreen);
         PalGlobal.IsPlayingRNG = true;
      }
   }

   public static void
   SetOutputDelay(
      int      delayTime
   )
   /*++
     Purpose:

       Set the output time interval of each char in the dialog box..

     Parameters:

       [IN]  iDelayTime - the delay time to be set.

     Return value:

       None.

   --*/
   {
      iDelayTime = delayTime;
   }

   public static nint
   GetScreen()
   {
      nint     texture;

      if (PalGlobal.ShowMoreData)
      {
         texture = g_pScreenData;
      }
      else if (Screen.IsFade)
      {
         texture = g_pScreenText;
      }
      else
      {
         texture = g_pScreen;
      }

      return texture;
   }

   public static int
   GetTextWidth(
      string      strText
   )
   {
      return S_GetTextSize(strText) * FONT_OFFSET;
   }

   public static int
   GetNumWidth(
      string      strText
   )
   {
      return S_GetTextSize(strText) * FONT_OFFSET_W_NUM;
   }

   public static void
   DrawNum(
      string         charWord,
      Pos            pos,
      SDL.Color      color,
      bool           fIsText  = false,
      PalAlign       align    = PalAlign.Middle,
      nint           texture  = 0
   )
   {
      string      strChar;
      nint        pText, pTextShadow;
      float       fw, fh;
      int         nLineWord, i, x, fontOffset;
      Pos         pos1;

      if (texture == 0)
      {
         texture = GetScreen();
      }

      pos1 = pos.Clone();

      nLineWord = S_GetTextSize(charWord);

      fontOffset = fIsText ? FONT_OFFSET_H_NUM : FONT_OFFSET_W_NUM;

      switch (align)
      {
         case PalAlign.Left:
         default:
            break;

         case PalAlign.Middle:
            posActual.X -= fontOffset * nLineWord / 2;
            break;

         case PalAlign.Right:
            posActual.X -= fontOffset * nLineWord;
            break;
      }

      for (i = 0; i < charWord.Length; i++)
      {
         //
         // Single-character to string conversion
         //
         strChar = $"{charWord[i]}";

         //
         // Create the surface on which the text has been drawn
         //
         pText = TTF.RenderTextBlended(g_pFontNum, strChar, 0, color);
         pTextShadow = TTF.RenderTextBlended(g_pFontNum, strChar, 0, COLOR_BLACK);

         //
         // Convert to texture
         //
         g_pText = SC_Texture(pText);
         g_pTextShadow = SC_Texture(pTextShadow);

         //
         // The characters are centered and displayed
         //
         S_GetTexSize(g_pText, out fw, out fh);
         x = pos1.X + (FONT_OFFSET - (int)fw) / 2;

         Screen.Copy(g_pTextShadow, texture, new SDL.FRect
         {
            X = x + FONT_SHADOW_OFFSET,
            Y = pos1.Y + FONT_SHADOW_OFFSET,
         });
         Screen.Copy(g_pTextShadow, texture, new SDL.FRect
         {
            X = x + FONT_SHADOW_OFFSET,
            Y = pos1.Y,
         });
         Screen.Copy(g_pText, texture, new SDL.FRect
         {
            X = x,
            Y = pos1.Y,
         });

         //
         // Release the text texture
         //
         Free();

         pos1.X += fontOffset;
      }
   }

   public static void
   DrawNum(
      string      charWord,
      Pos         pos,
      uint        hexColor = 0xFFFFFF,
      bool        fIsText  = false,
      nint        texture  = 0,
      PalAlign    align    = PalAlign.Left
   )
   {
      hexColor <<= 2;
      hexColor |= 0xFF;

      DrawNum(charWord, pos, SC_Color(hexColor), fIsText, align, texture);
   }

   private static void
   DrawChar(
      char     charWord,
      Pos      pos,
      nint     texture = 0
   )
   {
      string      strChar;
      nint        pText, pTextShadow;
      float       fw, fh;
      int         x;

      //
      // Single-character to string conversion
      //
      strChar = $"{charWord}";

      //
      // Create the surface on which the text has been drawn
      //
      pText = TTF.RenderTextBlended(g_pFont, strChar, 0, (fIsName) ? COLOR_GOLD : colorChar);
      pTextShadow = TTF.RenderTextBlended(g_pFont, strChar, 0, COLOR_BLACK);

      //
      // Convert to texture
      //
      g_pText = SC_Texture(pText);
      g_pTextShadow = SC_Texture(pTextShadow);

      if (texture == 0)
      {
         texture = GetScreen();
      }

      //
      // The characters are centered and displayed
      //
      S_GetTexSize(g_pText, out fw, out fh);
      x = pos.X + (FONT_OFFSET - (int)fw) / 2;

      Screen.Copy(g_pTextShadow, texture, new SDL.FRect
      {
         X = x + FONT_SHADOW_OFFSET,
         Y = pos.Y + FONT_SHADOW_OFFSET,
      });
      Screen.Copy(g_pTextShadow, texture, new SDL.FRect
      {
         X = x + FONT_SHADOW_OFFSET,
         Y = pos.Y,
      });
      Screen.Copy(g_pText, texture, new SDL.FRect
      {
         X = x,
         Y = pos.Y,
      });

      if (fAutoUpdate)
      {
         //
         // Update the screen immediately after each character is output
         //
         Screen.Update();
      }

      //
      // Release the text texture
      //
      Free();
   }

   public static void
   DrawText(
      string            strText,
      Pos               pos,
      SDL.Color         color,
      PalAlign          align       = PalAlign.Left,
      TTF.Direction     direction   = TTF.Direction.LTR
   )
   {
      int      i, nLineWord, iOffsetX = 0, iOffsetY = 0;
      char     charWord;

      posActual = pos.Clone();

      colorChar = color;

      //
      // Align the text
      //
      switch (direction)
      {
         case TTF.Direction.LTR:
         case TTF.Direction.RTL:
         default:
            iOffsetX = FONT_OFFSET;
            nLineWord = S_GetTextSize(strText);
            break;

         case TTF.Direction.TTB:
         case TTF.Direction.BTT:
            nLineWord = 1;
            iOffsetY = FONT_OFFSET;
            break;
      }

      switch (align)
      {
         case PalAlign.Left:
         default:
            break;

         case PalAlign.Middle:
            posActual.X -= FONT_OFFSET * nLineWord / 2;
            break;

         case PalAlign.Right:
            posActual.X -= FONT_OFFSET * nLineWord;
            break;
      }

      for (i = 0; i < strText.Length; i++)
      {
         if (fAutoUpdate && !fUserSkip)
         {
            PalInput.ClearKeyState();

            PalTimer.Delay(iDelayTime * 8);

            if (PalInput.Pressed(PalKey.Search | PalKey.Menu))
            {
               //
               // User pressed a key to skip the dialog
               // Disable word-by-word delay
               //
               fUserSkip = true;
            }
         }

         charWord = strText[i];

         switch (charWord)
         {
            case '-':
               //
               // Cyan text
               //
               if (colorChar.Equals(COLOR_CYAN)) goto origin;
               colorChar = COLOR_CYAN;
               continue;

            case '@':
            case '\'':
               //
               // Red text
               //
               if (colorChar.Equals(COLOR_RED)) goto origin;
               colorChar = COLOR_RED;
               continue;

            case '\"':
               //
               // Yellow text
               //
               if (colorChar.Equals(COLOR_YELLOW)) goto origin;
               colorChar = COLOR_YELLOW;
               continue;

            case '$':
               //
               // Set the delay time of text-displaying
               //
               SetOutputDelay(S_INT(strText.Substring(i + 1, 2)));
               i += 3;
               continue;

            origin:
               //
               // White text
               //
               colorChar = color;
               continue;

            default:
               break;
         }

         DrawChar(charWord, posActual);

         posActual.X += iOffsetX;
         posActual.Y += iOffsetY;
      }

      //
      // Crossing lines will restore the font color
      //
      colorChar = COLOR_WHITE;
   }

   public static void
   DrawText(
      string            strText,
      Pos               pos,
      uint              dwColorVal,
      PalAlign          align       = PalAlign.Left,
      TTF.Direction     direction   = TTF.Direction.LTR
   )
   {
      DrawText(strText, pos, SC_Color(dwColorVal), align, direction);
   }

   public static void
   DrawText(
      string            strText,
      Pos               pos,
      PalAlign          align       = PalAlign.Left,
      TTF.Direction     direction   = TTF.Direction.LTR
   )
   {
      DrawText(strText, pos, COLOR_WHITE, align, direction);
   }

   private  static   SDL.FRect      frectMidBox = new SDL.FRect
   {
      X = listTextPos[(int)DialogBox.Middle].X,
      Y = listTextPos[(int)DialogBox.Middle].Y - FONT_OFFSET * 3 / 2,
      H = FONT_OFFSET * 3 / 2,
   };

   public static void
   DrawTalkText(
      string      strText
   )
   {
      int      index;
      bool     flipped;

      fAutoUpdate = true;
      index = (int)_DialogBox;

      //
      // Automatically set the text coordinates
      //
      posCurr = listTextPos[index].Clone();

      if (nLine > 4)
      {
         //
         // The rest dialogs should be shown in the next page.
         //
         DialogNextPage();
      }

      //
      // Perform Y-coordinate offset based on the current row number
      //
      posCurr.Y += nLine * FONT_OFFSET;

      switch (_DialogBox)
      {
         case DialogBox.Upper:
         case DialogBox.Lower:
            //
            // Check whether the first line of dialogue is the character name
            //
            if (nLine == 0)
            {
               if (strText.EndsWith("：") || strText.EndsWith(":"))
               {
                  fIsName = true;

                  //
                  // The name should be moved forward by two characters
                  //
                  posCurr.X -= FONT_NAME_OFFSET;
               }
               else
               {
                  nLine++;
                  posCurr.Y += FONT_OFFSET;
               }
            }

            //
            // Check whether there is a portrait
            //
            if (strFacePath != "0")
            {
               if (nLine == 0)
               {
                  //
                  // Display the avatar
                  //
                  flipped = _DialogBox == DialogBox.Upper;
                  DrawFace(
                     strFacePath,
                     listFacePos[index],
                     flipped ? PalAlign.Left : PalAlign.Right,
                     flipped
                  );
               }

               if (_DialogBox == DialogBox.Upper)
               {
                  //
                  // The text should be shifted to the right by a certain distance
                  // to make room for the portrait
                  //
                  posCurr.X += TEXT_OFFSET_HAVE_FACE;
               }
            }

            if (!PalGlobal.IsPlayingRNG && nLine == 0 && !fIsName)
            {
               //
               // This line of text is not the character name.
               // The screen needs to be backed up in advance
               //
               Screen.Backup(g_pScreen);
            }

            //
            // Start drawing the text
            //
            DrawText(strText, posCurr);

            if (!PalGlobal.IsPlayingRNG && fIsName)
            {
               //
               // This line of text is the character name.
               // A backup screen is needed after outputting the character name
               //
               Screen.Backup(g_pScreen);
            }

            fIsName = false;
            break;

         case DialogBox.Middle:
            //
            // Start drawing the text
            //
            DrawText(strText, posCurr, PalAlign.Middle);
            break;

         case DialogBox.Box:
            //
            // Start drawing the text
            //
            fUserSkip = true;
            frectMidBox.W = GetTextWidth(strText) + FONT_OFFSET * 3 / 2;
            PalUi.DrawBox(frectMidBox, PalAlign.Middle, GetScreen());
            DrawText(strText, posCurr, PalAlign.Middle);
            break;

         default:
            S_FAILED(
               "PalText.DrawTalkText",
               "Unknown type of dialog box"
            );
            break;
      }

      //
      // Break a line and turn off the speaker name flag
      //
      nLine++;
      fAutoUpdate = false;
   }

   public static void
   DrawFace(
      string      facePath,
      Pos         pos,
      PalAlign    align    = PalAlign.Middle,
      bool        flipped  = false
   )
   {
      nint        pTex;
      float       fw, fh;
      string[]    arrPath;
      string      charID, faceID, frameID;

      arrPath = facePath.Split('-');
      charID = arrPath[0];
      faceID = arrPath[1];
      frameID = arrPath[2];

      pTex = SC_Texture($@"{IMG_FACE_PATH}\{charID}\{faceID}-{frameID}.png");
      S_GetTexSize(pTex, out fw, out fh);

      frectFace.X = pos.X;
      frectFace.Y = pos.Y;
      frectFace.W = fw;
      frectFace.H = fh;

      switch (align)
      {
         case PalAlign.Left:
            break;

         case PalAlign.Middle:
            frectFace.X -= (int)fw / 2;
            break;

         case PalAlign.Right:
            frectFace.X -= (int)fw;
            frectFace.Y = VIDEO_HEIGHT - (int)fh;
            break;

         default:
            S_FAILED(
               "PalText.DrawFace",
               "Unknown image alignment method!"
            );
            break;
      }

      Screen.Rotated = flipped;
      Screen.Copy(pTex, frectFace);
      Screen.Rotated = false;

      SF_Texture(pTex);
   }

   public static void
   DialogNextPage()
   {
      DialogWaitForKey();
      nLine = 1;
      Screen.Restore(g_pScreen);
      Screen.Update();
   }

   public static void
   ClearDialog(
      bool     fWaitForKey
   )
   /*++
     Purpose:

       Clear the state of the dialog.

     Parameters:

       [IN]  fWaitForKey - whether wait for any key or not.

     Return value:

       None.

   --*/
   {
      if (nLine > 0 && fWaitForKey)
      {
         DialogWaitForKey();
      }

      nLine = 0;

      if (_DialogBox == DialogBox.Middle)
      {
         //
         // The dialog box should be at the top by default
         //
         SetDialog(DialogBox.Upper);
      }

      //
      // Enable word-by-word delay
      //
      fUserSkip = false;
   }

   public static void
   EndDialog()
   {
      ClearDialog(true);
      SetDialog(DialogBox.Upper);
   }

   private static void
   DialogWaitForKey()
   {
      DialogWaitForKeyWithMaximumSeconds(0);
   }

   private static void
   DialogWaitForKeyWithMaximumSeconds(
      float    flMaxSeconds
   )
   /*++
     Purpose:

       Wait for player to press a key after showing a dialog.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      ulong    dwBeginningTicks;

      dwBeginningTicks = SDL.GetTicks();

      PalInput.ClearKeyState();

      while (true)
      {
         PalTimer.Delay(100);

         switch (_DialogBox)
         {
            case DialogBox.Upper:
            case DialogBox.Lower:
               //
               // show the icon
               //

               Screen.Update();
               break;

            default:
               break;
         }

         if (Math.Abs(flMaxSeconds) > float.Epsilon && SDL.GetTicks() - dwBeginningTicks > 1000 * flMaxSeconds)
         {
            //
            // The dialog box will automatically end after the specified number of seconds
            //
            break;
         }

         if (g_InputState.keyPress != PalKey.None)
         {
            //
            // Press any key to end the dialog box
            //
            break;
         }
      }

      PalInput.ClearKeyState();
   }
}
