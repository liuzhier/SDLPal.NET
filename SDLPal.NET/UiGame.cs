using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalFont;
using static PalInput;
using static PalLog;
using static PalMap;
using static PalSave;
using static PalUi;
using static PalUi.Menu;
using static PalVideo;
using static PalScene;
using static PalScript;
using static Resistance;
using static SafeSys;

public unsafe class PalUiGame
{
   public   static   nint[]      arrpTitleMenu;

   public static void
   Init()
   {
      //
      // Initialize the UI of various menus
      //
      InitMenuUi($@"{UI_PATH}\TitleMenu", out arrpTitleMenu);
   }

   public static void
   Free()
   {
      //
      // Release all menu UI
      //
      FreeMenuUi(ref arrpTitleMenu);
   }

   public static void
   InitMenuUi(
         string      path,
   out   nint[]      arrpTexture
   )
   {
      int         i;
      string      img_path;

      for (i = 1; ; i++)
      {
         img_path = $@"{path}\{i:D5}.png";

         if (!File.Exists(img_path)) break;
      }

      arrpTexture = new nint[i];

      for (i = 1; i < arrpTexture.Length; i++)
      {
         img_path = $@"{path}\{i:D5}.png";

         if (!File.Exists(img_path)) break;

         arrpTexture[i] = SC_Texture(img_path);
      }
   }

   public static void
   FreeMenuUi(
   ref   nint[]      arrpTexture
   )
   {
      int      i;

      if (arrpTexture == null) return;

      for (i = 0; i < arrpTexture.Length; i++)
      {
         SF_Texture(ref arrpTexture[i]);
      }
   }

   public static void
   FreeMenuUi(
   ref   List<nint>      listpTexture
   )
   {
      int      i;

      if (listpTexture == null) return;

      for (i = 0; i < listpTexture.Count; i++)
      {
         SF_Texture(listpTexture[i]);
      }

      listpTexture.Clear();
   }

   public static void
   DrawOpeningMenuBackground()
   /*++
     Purpose:

       Draw the background of the main menu.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      int      x, y;

      x = VIDEO_WIDTH - FONT_OFFSET * 2;
      y = 100;

      //
      // Draw the background
      //
      Screen.Copy(arrpTitleMenu[1], g_pScreen, true);
      Screen.Fade(2, false);

      PalText.DrawText("仙剑奇侠传 之", new Pos(x, y), COLOR_PINK, PalAlign.Middle, TTF.Direction.TTB);

      x -= (int)(FONT_OFFSET * 2.5);
      y += FONT_OFFSET * 5;
      PalText.DrawText("﹁\"圣灵终殇\"﹂", new Pos(x, y), COLOR_PINK, PalAlign.Middle, TTF.Direction.TTB);

      x = VIDEO_WIDTH;
      y = VIDEO_HEIGHT - FONT_OFFSET - 6;
      PalText.DrawText("大量代码借自\"SDLPAL\"", new Pos(x, y), COLOR_CYAN, PalAlign.Right);
      y -= FONT_OFFSET;
      PalText.DrawText("引擎：@SDL3-CS@", new Pos(x, y), COLOR_CYAN, PalAlign.Right);
      y -= FONT_OFFSET;
      PalText.DrawText("免费游戏，严禁用于商业用途", new Pos(x, y), COLOR_GOLD, PalAlign.Right);
      y -= FONT_OFFSET;
      PalText.DrawText("作者：李春晓", new Pos(x, y), COLOR_GREEN, PalAlign.Right);
      y -= FONT_OFFSET;
      PalText.DrawText("SDLPal.NET", new Pos(x, y), COLOR_GOLD, PalAlign.Right);
   }

   public static int
   OpeningMenu()
   /*++
     Purpose:

       Show the opening menu.

     Parameters:

       None.

     Return value:

       Which saved slot to load from (1-5). 0 to start a new game.

   --*/
   {
      int            i, iItemSelected, iSaveID = -1;
      PalUi.Menu     menu;
      string[]       arrText;

      arrText = [
         "新的故事",
         "旧的回忆",
         "离开游戏",
      ];

      menu = new PalUi.Menu
      {
         arrOption = new PalUi.Menu.Option[arrText.Length],
      };

      for (i = 0; i < menu.arrOption.Length; i++)
      {
         menu.arrOption[i] = new PalUi.Menu.Option
         {
            text  = arrText[i],
            pos   = new Pos
            {
               X  = VIDEO_WIDTH / 2,
               Y  = (VIDEO_HEIGHT - FONT_OFFSET * 2 * menu.arrOption.Length) / 2 + i * FONT_OFFSET * 2,
            },
            align       = PalAlign.Middle,
            iLineHeight = FONT_OFFSET * 2,
         };
      }

      //
      // Play the background music
      //
      PalAudio.PlayMusic(4, 1);

      //
      // Draw the background
      //
      DrawOpeningMenuBackground();
      Screen.Update();

      iItemSelected = menu.iDefaultID;

      //
      // Back up this frame of the picture for easy restoration
      //
      Screen.Backup(g_pScreen);

   begin_title_menu:
      while (true)
      {
         //
         // Clean up the input status
         //
         PalTimer.Delay(1);
         PalInput.ClearKeyState();

         //
         // Draw the backed-up image onto the screen
         //
         Screen.Restore(g_pScreen);

         //
         // Display menu view
         //
         PalUi.ReadMenu(menu);
         Screen.Update();

         //
         // Accept one frame of input
         //
         PalInput.ProcessEvent();

         //
         // Check the user input
         //
         if (PalInput.Pressed(PalKey.Up)
            || PalInput.Pressed(PalKey.Left))
         {
            //
            // The option cursor moves up
            //
            iItemSelected--;

            if (iItemSelected < 0)
            {
               iItemSelected = menu.arrOption.Length - 1;
            }
         }
         else if (PalInput.Pressed(PalKey.Down)
            || PalInput.Pressed(PalKey.Right))
         {
            //
            // Move the option cursor down
            //
            iItemSelected++;

            if (iItemSelected > menu.arrOption.Length - 1)
            {
               iItemSelected = 0;
            }
         }
         else if (PalInput.Pressed(PalKey.Search))
         {
            //
            // The user confirmed the choice
            //
            break;
         }

         //
         // Update the option cursor of the menu
         //
         menu.iDefaultID = iItemSelected;
      }

      //
      // Check the choices made by the user
      //
      switch (iItemSelected)
      {
         case 0:
            //
            // The user chose to start the game from the beginning
            //
            iSaveID = 0;
            break;

         case 1:
            //
            // The user chose to continue the game,
            // which will read the game save
            //
            iSaveID = SaveSlotMenu(0);
            break;

         case 2:
            //
            // The user chose to leave the game
            //
            PalMain.Free();
            break;

         case -1:
         default:
            //
            // The user didn't select anything
            // It's impossible to really carry out up to here
            //
            goto begin_title_menu;
      }

      //
      // The user made no choice and returned to the menu again
      //
      if (iSaveID == -1) goto begin_title_menu;

      //
      // Fade out the screen and the music
      //
      PalAudio.StopMusic();
      Screen.Fade(1);

      return iSaveID;
   }

   public static int
   SaveSlotMenu(
      int      iDefaultSlot
   )
   /*++
     Purpose:

       Show the load game menu.

     Parameters:

       [IN]  wDefaultSlot - default save slot number (1-5).

     Return value:

       Which saved slot to load from (1-5). MENUITEM_VALUE_CANCELLED if cancelled.

   --*/
   {
      int         iItemSelected = 1, iItemSelectedLast = -1;
      float       w, h, w2, h2, y;
      string      path;
      nint        pTexScreenshot = 0;

      //
      // Back up this frame of the picture for easy restoration
      //
      Screen.Backup(g_pScreen);

      while (true)
      {
         //
         // Clean up the input status
         //
         PalTimer.Delay(1);
         PalInput.ClearKeyState();

         //
         // Draw the backed-up image onto the screen
         //
         Screen.Restore(g_pScreen);

         //
         // The cursor position has changed. Re-read the screenshot
         //
         if (iItemSelectedLast != iItemSelected)
         {
            iItemSelectedLast = iItemSelected;

            path = @$"{SAVE_PATH}\{iItemSelected:D2}";

            if (Directory.Exists(path))
            {
               path = @$"{path}\Screenshot.png";

               //
               // Check whether the screenshot exists
               //
               if (File.Exists(path))
               {
                  //
                  // The screenshot exists
                  //
                  pTexScreenshot = SC_Texture(path);
               }
               else
               {
                  //
                  // The screenshot does not exist
                  //
                  pTexScreenshot = arrpTitleMenu[6];
               }
            }
            else
            {
               //
               // There is no game save file at this location
               //
               pTexScreenshot = arrpTitleMenu[7];
            }
         }

         //
         // Draw the screenshot
         //
         S_GetTexSize(pTexScreenshot, out w, out h);
         Screen.Copy(pTexScreenshot, new SDL.FRect
         {
            X = (VIDEO_WIDTH - w) / 2,
            Y = VIDEO_HEIGHT - h - 25,
         });

         //lpSurface = listpTitleMenu[0];
         //Screen.Copy(listpTitleMenu[0], g_pSurface, new SDL.Rect
         //{
         //   X = (VIDEO_WIDTH - 600) / 2,
         //   Y = VIDEO_HEIGHT - 450 - 27,
         //   W = 600,
         //   H = 450,
         //});

         //
         // Draw the screenshot box
         //
         S_GetTexSize(arrpTitleMenu[2], out w, out h);
         Screen.Copy(arrpTitleMenu[2], new SDL.FRect
         {
            X = (VIDEO_WIDTH - w) / 2,
            Y = VIDEO_HEIGHT - h,
         });

         //
         // Draw the information box
         //
         S_GetTexSize(arrpTitleMenu[3], out w, out h);
         Screen.Copy(arrpTitleMenu[3], new SDL.FRect
         {
            X = (VIDEO_WIDTH - w + 108) / 2,
            Y = 0,
         });

         //
         // Draw the left and right buttons
         //
         S_GetTexSize(arrpTitleMenu[4], out w2, out h2);
         y = VIDEO_HEIGHT - (h + h2) / 2;
         Screen.Copy(arrpTitleMenu[4], new SDL.FRect
         {
            X = (VIDEO_WIDTH - w) / 2 - w2 - 16,
            Y = y,
         });
         Screen.Copy(arrpTitleMenu[5], new SDL.FRect
         {
            X = (VIDEO_WIDTH + w) / 2 + 16,
            Y = y,
         });

         //
         // Draw archive information
         //
         PalText.DrawText(
            $@"进度{iItemSelected}",
            new Pos
            {
               X = VIDEO_WIDTH / 2,
               Y = 30
            },
            COLOR_GOLD,
            PalAlign.Middle
         );

         PalText.DrawText(
            $@"林家堡·前院·比武招亲",
            new Pos
            {
               X = VIDEO_WIDTH / 2,
               Y = 30 + FONT_OFFSET + 15
            },
            COLOR_YELLOW,
            PalAlign.Middle
         );

         Screen.Update();

         //
         // Accept one frame of input
         //
         PalInput.ProcessEvent();

         //
         // Check the user input
         //
         if (PalInput.Pressed(PalKey.Left))
         {
            iItemSelected--;
         }
         else if (PalInput.Pressed(PalKey.Right))
         {
            iItemSelected++;
         }
         else if (PalInput.Pressed(PalKey.Up))
         {
            iItemSelected -= 10;
         }
         else if (PalInput.Pressed(PalKey.Down))
         {
            iItemSelected += 10;
         }
         else if (PalInput.Pressed(PalKey.Search))
         {
            //
            // The user confirmed the choice
            //
            break;
         }
         else if (PalInput.Pressed(PalKey.Menu))
         {
            //
            // The user exited the menu
            //
            iItemSelected = -1;
            break;
         }

         //
         // Prevent cursor from crossing boundaries
         //
         iItemSelected = Math.Max(iItemSelected, 1);
         iItemSelected = Math.Min(iItemSelected, MAX_SAVE_NUM);
      }

      return iItemSelected;
   }

   public static void
   SceneMainMenu(
      int      iSelected   = 0
   )
   /*++
     Purpose:

       Display the main menu within the game scene.

     Parameters:

       [IN]  iSelected - The selected option by default.

     Return value:

       None.

   --*/
   {
      const int
         POS_X = FONT_OFFSET_H_NUM,
         POS_Y = FONT_OFFSET_H_NUM;
      
      int                           i, iItemSelected;
      string[]                      arrText;
      Pos                           posText, posNum, posText1, posNum1;
      SDL.FRect                     frectCash, frectMenu;
      PalUi.Menu                    menu;

      iItemSelected = 0;

      //S_GetSave().Cash = 0x7FFFFFFF;
      //S_GetSave().CollectValue = 0x7FFFFFFF;
      arrText = [
         "状态",
         "仙术",
         "道具",
         "系统",
      ];
      posText = new Pos
      {
         X = (int)(POS_X + FONT_OFFSET * 0.3f),
         Y = (int)(POS_Y + FONT_OFFSET * 0.15f),
      };
      posNum = new Pos
      {
         X = posText.X + (int)(FONT_OFFSET * 2f),
         Y = posText.Y + (FONT_OFFSET - FONT_OFFSET_H_NUM) / 2,
      };
      posText1 = new Pos
      {
         X = posText.X,
         Y = posText.Y + FONT_OFFSET,
      };
      posNum1 = new Pos
      {
         X = posNum.X,
         Y = posNum.Y + FONT_OFFSET,
      };
      frectCash = new SDL.FRect
      {
         X = POS_X,
         Y = POS_Y,
         W = FONT_OFFSET * 6,
         H = FONT_OFFSET * 2.5f,
      };
      frectMenu = new SDL.FRect
      {
         X = frectCash.X,
         Y = frectCash.Y + frectCash.H + FONT_OFFSET * 0.5f,
         W = FONT_OFFSET * 3,
         H = FONT_OFFSET * (arrText.Length + 1),
      };

      //
      // Create menu items
      //
      menu = new PalUi.Menu
      {
         arrOption = new PalUi.Menu.Option[arrText.Length],
      };

      for (i = 0; i < menu.arrOption.Length; i++)
      {
         menu.arrOption[i] = new PalUi.Menu.Option
         {
            text = arrText[i],
            pos = new Pos
            {
               X = (int)(frectMenu.X + FONT_OFFSET * 0.5),
               Y = (int)(frectMenu.Y + FONT_OFFSET * 0.3 + i * FONT_OFFSET),
            },
            align = PalAlign.Left,
            iLineHeight = FONT_OFFSET * 2,
         };
      }

      //
      // Draw a cash/collection value box
      //
      PalUi.DrawBox(frectCash, PalAlign.Left);
      PalText.DrawText("金钱", posText, COLOR_GOLD);
      PalText.DrawNum($"{S_GetSave().Cash,10}", posNum, COLOR_WHITE, align: PalAlign.Left);
      PalText.DrawText("灵葫", posText1, COLOR_PINK);
      PalText.DrawNum($"{S_GetSave().CollectValue,10}", posNum1);

      //
      // Draw the background of the menu
      //
      PalUi.DrawBox(frectMenu, PalAlign.Left);

      while (true)
      {
         //
         // Clean up the input status
         //
         PalTimer.Delay(1);
         PalInput.ClearKeyState();

         //
         // Draw the contents in the menu
         //
         PalUi.ReadMenu(menu);

         Screen.Update();

         //
         // Accept one frame of input
         //
         PalInput.ProcessEvent();

         //
         // Check the user input
         //
         if (PalInput.Pressed(PalKey.Menu))
         {
            //
            // The user needs to exit the menu
            //
            break;
         }
         else if (PalInput.Pressed(PalKey.Up | PalKey.Left))
         {
            //
            // The option cursor moves up
            //
            iItemSelected--;

            if (iItemSelected < 0)
            {
               iItemSelected = menu.arrOption.Length - 1;
            }
         }
         else if (PalInput.Pressed(PalKey.Down | PalKey.Right))
         {
            //
            // Move the option cursor down
            //
            iItemSelected++;

            if (iItemSelected > menu.arrOption.Length - 1)
            {
               iItemSelected = 0;
            }
         }
         else if (PalInput.Pressed(PalKey.Search))
         {
            //
            // The user confirmed the choice
            //

            //
            // Draw a frame of the scene to overwrite the original menu
            //
            //PalScene.Draw();

            //
            // Back up this frame of the picture for easy restoration
            //
            Screen.Backup(g_pScreen);

            //
            // Check the choices made by the user
            //
            switch (iItemSelected)
            {
               case 0:
                  //
                  // Team member status
                  //
                  break;

               case 1:
                  //
                  // The immortal arts of the team members
                  //
                  break;

               case 2:
                  //
                  // Inventory items
                  //
                  if (InventoryTypeMenu()) return;
                  break;

               case 3:
                  //
                  // System Menu
                  //
                  break;
            }

            //
            // Draw the backed-up image onto the screen
            //
            Screen.Restore(g_pScreen);
         }

         //
         // Update the option cursor of the menu
         //
         menu.iDefaultID = iItemSelected;
      }
   }

   public static bool
   InventoryTypeMenu()
   /*++
     Purpose:

       Display the main menu within the game scene.

     Parameters:
   
       None.

     Return value:

       Exit all menus when returning true.

   --*/
   {
      const int
         POS_X = (int)(FONT_OFFSET_H_NUM + FONT_OFFSET * 3.5),
         POS_Y = FONT_OFFSET_H_NUM + FONT_OFFSET * 5;

      int                           i, iItemSelected;
      string[]                      arrText;
      SDL.FRect                     frect;
      PalUi.Menu                    menu;

      iItemSelected = 0;

      arrText = [
         "装备",
         "使用",
      ];
      frect = new SDL.FRect
      {
         X = POS_X,
         Y = POS_Y,
         W = FONT_OFFSET * 3,
         H = FONT_OFFSET * (arrText.Length + 1),
      };

      //
      // Create menu items
      //
      menu = new PalUi.Menu
      {
         arrOption = new PalUi.Menu.Option[arrText.Length],
      };

      for (i = 0; i < menu.arrOption.Length; i++)
      {
         menu.arrOption[i] = new PalUi.Menu.Option
         {
            text = arrText[i],
            pos = new Pos
            {
               X = (int)(frect.X + FONT_OFFSET * 0.5),
               Y = (int)(frect.Y + FONT_OFFSET * 0.3 + i * FONT_OFFSET),
            },
            align = PalAlign.Left,
            iLineHeight = FONT_OFFSET * 2,
         };
      }

      //
      // Draw the background of the menu
      //
      PalUi.DrawBox(frect, PalAlign.Left);

      while (true)
      {
         //
         // Clean up the input status
         //
         PalTimer.Delay(1);
         PalInput.ClearKeyState();

         //
         // Draw the contents in the menu
         //
         PalUi.ReadMenu(menu);

         Screen.Update();

         //
         // Accept one frame of input
         //
         PalInput.ProcessEvent();

         //
         // Check the user input
         //
         if (PalInput.Pressed(PalKey.Menu))
         {
            //
            // The user needs to exit the menu
            //
            return false;
         }
         else if (PalInput.Pressed(PalKey.Up | PalKey.Left))
         {
            //
            // The option cursor moves up
            //
            iItemSelected--;

            if (iItemSelected < 0)
            {
               iItemSelected = menu.arrOption.Length - 1;
            }
         }
         else if (PalInput.Pressed(PalKey.Down | PalKey.Right))
         {
            //
            // Move the option cursor down
            //
            iItemSelected++;

            if (iItemSelected > menu.arrOption.Length - 1)
            {
               iItemSelected = 0;
            }
         }
         else if (PalInput.Pressed(PalKey.Search))
         {
            //
            // The user confirmed the choice
            //

            //
            // Draw a frame of the scene to overwrite the original menu
            //
            PalScene.Draw();

            //
            // Check the choices made by the user
            //
            switch (iItemSelected)
            {
               case 0:
                  //
                  // Equipment menu
                  //
                  break;

               case 1:
                  //
                  // Use menu
                  //
                  InventoryUseItem();
                  break;
            }

            return true;
         }

         //
         // Update the option cursor of the menu
         //
         menu.iDefaultID = iItemSelected;
      }
   }

   static   int
      Inventory_Begin = 0,
      Inventory_Selected = 0;

   static   List<Inventory>         Inventory_List          = new List<Inventory>();
   static   Menu                    Inventory_Menu          = new Menu();

   public enum InventoryType
   {
      Use,        // Usable items
      Equip,      // Equipment
      Throw,      // Throwable items
      Sell,       // Collectible items (e.g., herbs)
   }

   public static Inventory
   InventoryMenu(
      InventoryType     inventoryType
   )
   /*++
     Purpose:

       Display the available inventory items.

     Parameters:
   
       None.

     Return value:

       None.

   --*/
   {
      const int
         POS_X    = FONT_OFFSET_H_NUM,
         POS_Y    = FONT_OFFSET_H_NUM,
         COL_NUM  = 3,
         ROW_NUM  = 5,
         PAGE_ITEM_NUM = COL_NUM * ROW_NUM;
      
      int                  i, len, colID, rowID, beginID, thisID, amount;
      List<Inventory>      listInventory, listUsable;
      Pos                  posImage, posText;
      Inventory            inventory;
      Item                 item;
      SDL.FRect            frectMenu, frectImageBox; ;

      listUsable = new List<Inventory>();
      frectMenu = new SDL.FRect
      {
         X = POS_X,
         Y = POS_Y,
         W = VIDEO_WIDTH - FONT_OFFSET_H_NUM * 2,
         H = VIDEO_HEIGHT - FONT_OFFSET_H_NUM * 2 - FONT_OFFSET * 5,
      };
      frectImageBox = new SDL.FRect
      {
         X = frectMenu.X,
         H = VIDEO_HEIGHT - frectMenu.Y - frectMenu.H - FONT_OFFSET_H_NUM * 2,
      };
      frectImageBox.W = frectImageBox.H;
      frectImageBox.Y = VIDEO_HEIGHT - frectImageBox.H - FONT_OFFSET_H_NUM;
      posImage = new Pos
      {
         X = (int)frectImageBox.X + 2,
         Y = (int)frectImageBox.Y + 2,
      };
      posText = new Pos
      {
         X = (int)(frectImageBox.X + frectImageBox.W) + FONT_OFFSET_H_NUM,
      };

      //
      // Draw the background of the menu
      //
      PalUi.DrawBox(frectMenu, PalAlign.Left);

      //
      // Draw the background of the inventory item image
      //
      PalUi.DrawBox(frectImageBox, PalAlign.Left);

      //
      // Back up this frame of the picture for easy restoration
      //
      Screen.Backup(g_pScreen);

      len = 0;
      beginID = -1;
      inventory = null;
      listInventory = S_GetSave().listInventory;

      while (true)
      {
         //
         // Clean up the input status
         //
         PalTimer.Delay(1);
         PalInput.ClearKeyState();

         if (listInventory.Count > 0)
         {
            listUsable = listInventory.Where(
               item => (item.Amount - item.AmountInUse > 0)
            ).ToList();
         }

         if (listUsable.Count > 0)
         {
            beginID = Inventory_Begin * COL_NUM;
            len = Math.Min(listUsable.Count - beginID, PAGE_ITEM_NUM);
            Inventory_List = listUsable[beginID..(beginID + len)];

            //
            // Draw the backed-up image onto the screen
            //
            Screen.Restore(g_pScreen);

            //
            // Put inventory items on the menu
            //
            Inventory_Menu.arrOption = new PalUi.Menu.Option[len];
            for (i = 0; i < len; i++)
            {
               colID = i % COL_NUM;
               rowID = i / COL_NUM;

               inventory = Inventory_List[i];
               item = inventory.Item;

               Inventory_Menu.arrOption[i] = new PalUi.Menu.Option
               {
                  text = item.Name,
                  pos = new Pos
                  {
                     X = POS_X + FONT_OFFSET_HALF + colID * FONT_OFFSET * 7,
                     Y = POS_Y + FONT_OFFSET_HALF + rowID * FONT_OFFSET * 2,
                  },
                  align = PalAlign.Left,
                  iLineHeight = FONT_OFFSET * 2,
                  fEnabled = inventoryType switch
                  {
                     InventoryType.Use => item._Scope.Usable,
                     InventoryType.Equip => item._Scope.Equipable,
                     InventoryType.Throw => item._Scope.Throwable,
                     InventoryType.Sell => item._Scope.Sellable,
                     _ => true,
                  },
               };

               amount = inventory.Amount - inventory.AmountInUse;

               //
               // Display the count of inventory items
               //
               PalText.DrawNum($"x{amount}", new Pos
               {
                  X = Inventory_Menu.arrOption[i].pos.X + (int)(FONT_OFFSET * 5.5),
                  Y = Inventory_Menu.arrOption[i].pos.Y + (FONT_OFFSET - FONT_OFFSET_H_NUM) / 2,
               }, COLOR_GOLD);
            }

            //
            // Prevent cursor from crossing boundaries
            //
            Inventory_Selected = Math.Min(Inventory_Selected, len - 1);
            Inventory_Selected = Math.Max(Inventory_Selected, 0);
            Inventory_Menu.iDefaultID = Inventory_Selected;

            //
            // Display images of inventory items
            //
            inventory = listUsable[beginID + Inventory_Selected];
            item = inventory.Item;
            PalUi.DrawItem(item.Bitmap, posImage,
               width: (int)frectImageBox.W - 4,
               height: (int)frectImageBox.H - 4
            );

            //
            // Display the description of inventory items
            //
            posText.Y = (int)frectImageBox.Y - FONT_OFFSET_H_NUM;
            for (i = 0; i < item.Description.Length; i++)
            {
               PalText.DrawText(item.Description[i], posText);
               posText.Y += FONT_OFFSET;
            }

            //
            // Display menu view
            //
            PalUi.ReadMenu(Inventory_Menu);
         }

         Screen.Update();

         //
         // Accept one frame of input
         //
         PalInput.ProcessEvent();

         //
         // Check the user input
         //
         if (PalInput.Pressed(PalKey.Menu))
         {
            //
            // The user needs to exit the menu
            //
            inventory = null;
            break;
         }
         else if (PalInput.Pressed(PalKey.Up))
         {
            //
            // The option cursor moves up
            //
            thisID = Inventory_Selected - COL_NUM;

            //
            // Prevent cursor from crossing boundaries
            //
            if (thisID >= 0)
            {
               Inventory_Selected -= COL_NUM;
            }
            else
            {
               Inventory_Begin--;
            }
         }
         else if (PalInput.Pressed(PalKey.Down))
         {
            //
            // The option cursor moves down
            //
            thisID = Inventory_Selected + COL_NUM;

            //
            // Prevent cursor from crossing boundaries
            //
            if (thisID < len)
            {
               Inventory_Selected += COL_NUM;
            }
            else
            {
               Inventory_Begin++;
            }
         }
         else if (PalInput.Pressed(PalKey.Left))
         {
            //
            // The option cursor moves left
            //
            thisID = Inventory_Selected - 1;

            //
            // Prevent cursor from crossing boundaries
            //
            if (thisID >= 0)
            {
               Inventory_Selected--;
            }
            else
            {
               Inventory_Begin--;
            }
         }
         else if (PalInput.Pressed(PalKey.Right))
         {
            //
            // Move the option cursor right
            //
            thisID = Inventory_Selected + 1;

            //
            // Prevent cursor from crossing boundaries
            //
            if (thisID < len)
            {
               Inventory_Selected++;
            }
            else
            {
               Inventory_Begin++;
            }
         }
         else if (PalInput.Pressed(PalKey.Search))
         {
            //
            // The user confirmed the choice
            //
            if (Inventory_Menu.arrOption[Inventory_Selected].fEnabled)
            {
               break;
            }
         }

         //
         // Prevent cursor from crossing boundaries
         //
         Inventory_Begin = Math.Min(Inventory_Begin,
            (int)Math.Ceiling((float)listUsable.Count / COL_NUM) - ROW_NUM
         );
         Inventory_Begin = Math.Max(Inventory_Begin, 0);
      }

      return inventory;
   }

   public static void
   InventoryUseItem()
   /*++
     Purpose:
   
      Allow player use an item in the game.

     Parameters:
   
       None.

     Return value:

       None.

   --*/
   {
      int            scrAddr;
      string         scr;
      Inventory      inventory;
      Item           item;

      //
      // Display the inventory item selection menu
      //
      inventory = InventoryMenu(InventoryType.Use);

      if (inventory != null)
      {
         item = inventory.Item;

         //
         // Execute the script.
         //
         g_fShowSceneInfo = false;
         scr = item._Script.Use;
         scrAddr = PalScript.GetScrAddr(scr);
         item._Script.Use = PalScript.MKScrTag(
            PalScript.RunTrigger(scrAddr, -1, -1, $"UseItem<{item.Name}>")
         );

         if (item._Scope.Consuming && g_fScriptSuccess)
         {
            //
            // The use was successful,
            // reducing the number of inventory items
            //
            S_InventoryAddItem(inventory.ItemID, -1);
            S_GetSave().listInventory.Remove(inventory);
         }
      }
   }

   /*++
   public static void
   SceneMainMenu1(
      int      iSelected   = 0
   )
   /*++
     Purpose:

       Display the main menu within the game scene.

     Parameters:

       [IN]  iSelected - The selected option by default.

     Return value:

       None.

   --*/
   /*
   {
      int                           i, curr, max, iItemSelected, boxActivity, boxSelected;
      float                         x, y, w, xBox, yBox;
      string[]                      arrText;
      Pos                           pos;
      SDL.FRect                     frect, frectBox, frectContent, frectDesc;
      PalUi.Menu                    menu;
      PalUi.Menu.Option.Status      status;

      S_GetSave().PartySize = MAX_HERO_NUM;

      iItemSelected = iSelected;
      boxActivity = 0;
      boxSelected = -1;

      pos = new Pos();

      x = (int)(VIDEO_WIDTH - FONT_OFFSET * 1.6) / 2;
      y = VIDEO_HEIGHT / 2;
      w = FONT_OFFSET * 16;
      frect = new SDL.FRect
      {
         X = x,
         Y = y,
         W = w,
         H = FONT_OFFSET * 3 / 2,
      };
      frect.Y -= frect.H / 2 + FONT_OFFSET * 7;

      x = VIDEO_WIDTH;
      w -= FONT_OFFSET * 10;
      frectBox = new SDL.FRect
      {
         X = x,
         Y = y,
         W = w,
         H = FONT_OFFSET * 4 / 2,
      };
      frectBox.Y -= frect.H / 2 + FONT_OFFSET * 5;

      //x = VIDEO_WIDTH - FONT_OFFSET * 6 / 2;
      x = (VIDEO_WIDTH - FONT_OFFSET * 6) / 2;
      w += FONT_OFFSET * 8;
      frectContent = new SDL.FRect
      {
         X = x,
         Y = y,
         W = w,
         H = (int)(FONT_OFFSET * 8.5),
      };
      frectContent.Y -= frect.H / 2 + FONT_OFFSET * 5;

      frectDesc = new SDL.FRect
      {
         X = x,
         Y = y,
         W = w,
         H = (int)(FONT_OFFSET * 4.5),
      };
      frectDesc.Y += (int)(FONT_OFFSET * 3.3);

      arrText = [
         "状态",
         "仙术",
         "道具",
         "系统",
      ];

      //
      // Create menu items
      //
      menu = new PalUi.Menu
      {
         arrOption = new PalUi.Menu.Option[arrText.Length],
      };

      for (i = 0; i < menu.arrOption.Length; i++)
      {
         menu.arrOption[i] = new PalUi.Menu.Option
         {
            text  = arrText[i],
            pos   = new Pos
            {
               X  = (int)(frect.X - frect.W / 2) + i * ((int)frect.W / arrText.Length) + FONT_OFFSET * 2,
               Y  = (int)frect.Y + FONT_OFFSET / 6,
            },
            align       = PalAlign.Middle,
            iLineHeight = FONT_OFFSET * 2,
         };
      }

      //
      // Back up this frame of the picture for easy restoration
      //
      Screen.Backup(g_pScreen);

   begin_menu:
      while (true)
      {
         //
         // Clean up the input status
         //
         PalTimer.Delay(1);
         PalInput.ClearKeyState();

         //
         // Draw the backed-up image onto the screen
         //
         Screen.Restore(g_pScreen);

         //
         // Display menu view
         //
         PalUi.DrawBox(frect, PalAlign.Middle);
         PalUi.ReadMenu(menu);

         //
         // Display the role HMSP box
         //
         xBox = frectBox.X;
         yBox = frectBox.Y;
         for (i = 0; i < S_GetSave().PartySize; i++)
         {
            if (i == boxActivity)
            {
               status = PalUi.Menu.Option.Status.Activity;
               frectBox.X -= FONT_OFFSET;
            }
            else if (i == boxSelected)
            {
               status = PalUi.Menu.Option.Status.Selected;
            }
            else
            {
               status = PalUi.Menu.Option.Status.None;
            }

            PalUi.DrawBox(frectBox, PalAlign.Right, statusOption: status);

            pos.X = (int)(frectBox.X - 50);
            pos.Y = (int)(frectBox.Y - 120);
            PalText.DrawFace($"{(i + 1)}-1-1", pos);

            curr = 1700;
            max = 2000;
            pos.X = (int)(frectBox.X - frectBox.W + FONT_OFFSET_H_NUM * 3);
            pos.Y = (int)(frectBox.Y);
            PalText.DrawNum($"{curr,5}/{max,5}", pos, COLOR_WHITE);

            pos.X -= (int)(FONT_OFFSET_W_NUM * 4.2);
            pos.Y += FONT_OFFSET_H_NUM + 3;
            PalUi.DrawProgressLine(curr, max, pos, 0xFF0000);

            curr = 250;
            max = 1300;
            pos.X += (int)(FONT_OFFSET_W_NUM * 4.2);
            PalText.DrawNum($"{curr,5}/{max,5}", pos, COLOR_CYAN);

            pos.X -= (int)(FONT_OFFSET_W_NUM * 4.2);
            pos.Y += FONT_OFFSET_H_NUM + 3;
            PalUi.DrawProgressLine(curr, max, pos, 0x0000FF);

            curr = 306;
            max = 500;
            pos.X += (int)(FONT_OFFSET_W_NUM * 4.2);
            PalText.DrawNum($"{curr,5}/{max,5}", pos, COLOR_GOLD);

            pos.X -= (int)(FONT_OFFSET_W_NUM * 4.2);
            pos.Y += FONT_OFFSET_H_NUM + 3;
            PalUi.DrawProgressLine(curr, max, pos, 0x00FF00);

            frectBox.X = xBox;
            frectBox.Y += (VIDEO_HEIGHT - frectContent.Y) / (MAX_HERO_NUM);
         }
         frectBox.Y = yBox;

         PalUi.DrawBox(frectContent, PalAlign.Middle);
         PalUi.DrawBox(frectDesc, PalAlign.Middle);

         //
         // Display submenu
         //
         pos.X = (int)(frectContent.X - frectContent.W / 2);
         pos.Y = (int)frectContent.Y;
         switch (iItemSelected)
         {
            case 0:
               RoleStatus(pos, boxActivity);
               break;

            case 1:
               RoleMagic(pos, boxActivity);
               break;

            case 2:
               Inventory(pos);
               break;
         }

         Screen.Update();

         //
         // Accept one frame of input
         //
         PalInput.ProcessEvent();

         //
         // Check the user input
         //
         if (PalInput.Pressed(PalKey.Menu))
         {
            //
            // The user needs to exit the menu
            //
            break;
         }
         else if (PalInput.Pressed(PalKey.Auto))
         {
            //
            // The option cursor moves up
            //
            iItemSelected--;

            if (iItemSelected < 0)
            {
               iItemSelected = menu.arrOption.Length - 1;
            }
         }
         else if (PalInput.Pressed(PalKey.Defend))
         {
            //
            // Move the option cursor down
            //
            iItemSelected++;

            if (iItemSelected > menu.arrOption.Length - 1)
            {
               iItemSelected = 0;
            }
         }

         if (PalInput.Pressed(PalKey.Repeat))
         {
            boxActivity--;

            if (boxActivity < 0)
            {
               boxActivity = S_GetSave().PartySize - 1;
            }
         }
         else if (PalInput.Pressed(PalKey.Force))
         {
            boxActivity++;

            if (boxActivity > S_GetSave().PartySize - 1)
            {
               boxActivity = 0;
            }
         }
         else if (PalInput.Pressed(PalKey.Search))
         {
            //
            // The user confirmed the choice
            //
            break;
         }

         //
         // Update the option cursor of the menu
         //
         menu.iDefaultID = iItemSelected;
      }

      S_GetSave().PartySize = 1;
   }

   /*
   public static void
   RoleStatus(
      Pos      pos,
      int      roleID
   )
   {
      int            i;
      int[]          curr, max;
      float[]        fCurr;
      string[]       str, str2;
      Pos[]          arrPos;
      Pos            pos1;
      Hero           hero;
      Resistance     resistance;
      Elemental      elemental;
      Item           item;

      pos1 = pos.Clone();

      arrPos = [
         new Pos(FONT_OFFSET / 3, FONT_OFFSET / 6),
         new Pos((int)(FONT_OFFSET * 7), FONT_OFFSET / 2),
         new Pos((int)(FONT_OFFSET * 11), FONT_OFFSET / 2),
         new Pos(FONT_OFFSET / 4, (int)(FONT_OFFSET * 9.2)),
      ];

      pos1.X = pos.X + arrPos[0].X + FONT_OFFSET * 3;
      pos1.Y = pos.Y + arrPos[0].Y;
      hero = S_GetHero(roleID + 1);
      PalText.DrawText($"@{hero.Name}@", pos1, PalAlign.Middle);

      fixed (HeroBase* hb = &hero._HeroBase)
      {
         pos1.X += (int)(FONT_OFFSET * 5.2);
         pos1.Y += (int)(FONT_OFFSET * 3.5);
         //PalText.DrawFace($"{hb->AvatarID}-1-1", pos1, flipped: true);
         PalText.DrawFace($"{roleID + 1}-1-1", pos1, flipped: true);

         str = ["修行", "经历", "体力", "真气", "精力"];
         curr = [
            hb->Level,
            hero.ExperienceAll.Master.Exp,
            hb->HP,
            hb->MP,
            hb->SP,
         ];
         max = [
            300,
            hero.ExperienceAll.Master.Count,
            hb->MaxHP,
            hb->MaxMP,
            hb->MaxSP,
         ];

         for (i = 0; i < str.Length; i++)
         {
            pos1.X = pos.X + arrPos[0].X;
            pos1.Y = pos.Y + arrPos[0].Y + (int)(FONT_OFFSET * 1.4) * (i + 1);
            PalText.DrawText(str[i], pos1, PalAlign.Left);

            pos1.X += FONT_OFFSET * 2;
            pos1.Y += FONT_OFFSET_H_NUM / 5;
            PalText.DrawNum($@"{curr[i],5}\{max[i],5}", pos1);

            pos1.X += FONT_OFFSET_W_NUM * 3 / 2 - 2;
            pos1.Y += FONT_OFFSET_H_NUM * 3 / 2;
            PalUi.DrawProgressLine(curr[i], max[i], pos1, 0x00FF00, h: 6);
         }

         str = ["武术", "灵力", "防御", "身法", "吉运"];
         curr = [
            hb->_Attribute.AttackStrength,
            hb->_Attribute.MagicStrength,
            hb->_Attribute.Defense,
            hb->_Attribute.Dexterity,
            hb->_Attribute.FleeRate,
         ];

         for (i = 0; i < str.Length; i++)
         {
            pos1.X = pos.X + arrPos[1].X;
            pos1.Y = pos.Y + arrPos[1].Y + (int)(FONT_OFFSET_H_NUM * 1.2) * i;
            PalText.DrawNum(str[i], pos1, COLOR_GOLD, true);

            pos1.X += FONT_OFFSET_H_NUM * 2;
            PalText.DrawNum($@"{curr[i],5}", pos1);
         }

         pos1.X = pos.X + arrPos[1].X;
         pos1.Y = pos.Y + arrPos[1].Y + (int)(FONT_OFFSET_H_NUM * 1.2) * i;
         PalText.DrawNum($"合体法术", pos1, COLOR_GOLD, true);

         pos1.X += (int)(FONT_OFFSET_H_NUM * 4);
         PalText.DrawNum($@"{S_GetMagic(hero._Magic.Cooperative).Name}", pos1, fIsText: true, align: PalAlign.Middle);

         resistance = hero.Resistance;
         elemental = resistance._Elemental;
         str = [
            "风抗", "雷抗", "水抗", "火抗", "土抗",
            "毒抗", "物抗", "巫抗", "绝技", "治愈",
            "光抗", "暗抗",
         ];
         fCurr = [
            elemental.Wind,
            elemental.Thunder,
            elemental.Water,
            elemental.Fire,
            elemental.Earth,
            resistance.Poison,
            resistance.Physics,
            resistance.Sorcery,
            resistance.Ultimate,
            resistance.Leechcraft,
            resistance.Light,
            resistance.Evil,
         ];

         for (i = 0; i < str.Length; i++)
         {
            pos1.X = pos.X + arrPos[2].X;
            pos1.Y = pos.Y + arrPos[2].Y + (int)(FONT_OFFSET_H_NUM * 1.2) * i;
            PalText.DrawNum(str[i], pos1, COLOR_GOLD, true);

            pos1.X += FONT_OFFSET_H_NUM * 2;
            PalText.DrawNum($@"{(int)(fCurr[i] * 100),3}%", pos1);
         }

         str = ["头戴", "披挂", "身穿", "手持", "脚穿", "佩戴"];
         curr = [
            hb->_Equip.Head,
            hb->_Equip.Body,
            hb->_Equip.Armour,
            hb->_Equip.Backside,
            hb->_Equip.Hand,
            hb->_Equip.Foot,
         ];

         for (i = 0; i < str.Length; i++)
         {
            pos1.X = pos.X + arrPos[3].X + (int)(FONT_OFFSET * 2.3) * i;
            pos1.Y = pos.Y + arrPos[3].Y + (S_B(i % 2) ? FONT_OFFSET_H_NUM : 0);
            PalText.DrawText(str[i], pos1, PalAlign.Left);

            item = S_GetItem(curr[i]);

            pos1.X += FONT_OFFSET_W_NUM / 3;
            pos1.Y += (int)(FONT_OFFSET * 1.4);
            PalUi.DrawItem(item.Bitmap, pos1);

            pos1.X += (int)(FONT_OFFSET_W_NUM * 2.5);
            pos1.Y += (int)(FONT_OFFSET * 1.8);
            PalText.DrawNum(item.Name, pos1, fIsText: true, align: PalAlign.Middle);
         }
      }
   }

   const int
      COL_NUM = 2,
      ROW_NUM = 4,
      PAGE_ITEM_NUM = COL_NUM * ROW_NUM;

   static   int[]
      RoleMagic_BeginID          = new int[MAX_HERO_NUM],
      RoleMagic_MagicSelected    = new int[MAX_HERO_NUM];

   static   PalUi.Menu     menuList                = new Menu();
   static   List<int>      RoleMagic_listMagicID   = new List<int>();

   public static bool
   RoleMagic(
      Pos      pos,
      int      roleID
   )
   {

      int            heroID, i, len, colID, rowID;
      Hero           hero;
      List<int>      listMagicID;
      Magic          magic;
      List<string>      listMagicGenus;
      Pos            pos1;

      //heroID = S_GetRole(roleID).HeroID;
      heroID = roleID;
      hero = S_GetHero(heroID + 1);
      listMagicID = hero._Magic.listLearned;

      if (listMagicID.Count <= 0)
      {
         //
         // The current team member has no magic at all
         //
         return false;
      }

      //
      // Sort out the magic that should be displayed
      //
      RoleMagic_listMagicID.Clear();
      len = Math.Min(listMagicID.Count - RoleMagic_BeginID[heroID], PAGE_ITEM_NUM);
      for (i = RoleMagic_BeginID[heroID]; RoleMagic_listMagicID.Count < len; i++)
      {
         RoleMagic_listMagicID.Add(listMagicID[i]);
      }

      //
      // Put magic on the menu
      //
      menuList.arrOption = new PalUi.Menu.Option[len];
      pos1 = pos.Clone();
      for (i = 0; i < len; i++)
      {
         magic = S_GetMagic(listMagicID[RoleMagic_BeginID[heroID] + i]);

         colID = i % COL_NUM;
         rowID = i / COL_NUM;

         pos1.X = pos.X + colID * FONT_OFFSET * 8 + FONT_OFFSET_H_NUM;
         pos1.Y = pos.Y + rowID * FONT_OFFSET * 2 + FONT_OFFSET_H_NUM;

         menuList.arrOption[i] = new PalUi.Menu.Option
         {
            text = magic.Name,
            pos = pos1.Clone(),
            align = PalAlign.Left,
            iLineHeight = FONT_OFFSET * 2,
         };
      }

      //
      // Prevent cursor from crossing boundaries
      //
      RoleMagic_MagicSelected[heroID] = Math.Min(RoleMagic_MagicSelected[heroID], len - 1);
      RoleMagic_MagicSelected[heroID] = Math.Max(RoleMagic_MagicSelected[heroID], 0);
      menuList.iDefaultID = RoleMagic_MagicSelected[heroID];

      //
      // Show the type of magic
      //
      pos1.X = pos.X + FONT_OFFSET_H_NUM;
      pos1.Y = pos.Y + (int)(FONT_OFFSET * 8.5) + FONT_OFFSET_H_NUM;
      magic = S_GetMagic(RoleMagic_listMagicID[menuList.iDefaultID]);
      listMagicGenus = magic.GetGenus();
      foreach (var genus in listMagicGenus)
      {
         PalText.DrawNum(genus, pos1, COLOR_GOLD, fIsText: true);
         pos1.X += FONT_OFFSET_H_NUM * 2 + (int)(FONT_OFFSET_W_NUM * 0.6);
      }

      //
      // Show the description of magic
      //
      pos1.X = pos.X + FONT_OFFSET_W_NUM;
      pos1.Y = pos.Y + (int)(FONT_OFFSET * 9) + FONT_OFFSET_H_NUM;
      for (i = 0; i < magic.Description.Length; i++)
      {
         PalText.DrawText(magic.Description[i], pos1);
         pos1.Y += (int)(FONT_OFFSET * 0.95);
      }

      //
      // Display menu view
      //
      PalUi.ReadMenu(menuList);
      Screen.Update();

      //
      // Accept one frame of input
      //
      PalInput.ProcessEvent();

      //
      // Check the user input
      //
      if (PalInput.Pressed(PalKey.Up))
      {
         //
         // The option cursor moves up
         //
         RoleMagic_MagicSelected[heroID] -= COL_NUM;

         //
         // Prevent cursor from crossing boundaries
         //
         if (RoleMagic_MagicSelected[heroID] < 0)
         {
            RoleMagic_MagicSelected[heroID] += COL_NUM;
            RoleMagic_BeginID[heroID] -= COL_NUM;
         }
      }
      else if (PalInput.Pressed(PalKey.Down))
      {
         //
         // The option cursor moves down
         //
         RoleMagic_MagicSelected[heroID] += COL_NUM;

         //
         // Prevent cursor from crossing boundaries
         //
         if (RoleMagic_MagicSelected[heroID] > len - 1)
         {
            if (len < COL_NUM * ROW_NUM)
            {
               RoleMagic_MagicSelected[heroID] = len - 1;
            }
            else
            {
               RoleMagic_MagicSelected[heroID] -= COL_NUM;
            }
            RoleMagic_BeginID[heroID] += COL_NUM;
         }
      }
      else if(PalInput.Pressed(PalKey.Left))
      {
         //
         // The option cursor moves left
         //
         RoleMagic_MagicSelected[heroID]--;

         //
         // Prevent cursor from crossing boundaries
         //
         if (RoleMagic_MagicSelected[heroID] < 0)
         {
            if (RoleMagic_BeginID[heroID] > 0)
            {
               RoleMagic_MagicSelected[heroID] += COL_NUM;
            }
            RoleMagic_BeginID[heroID] -= COL_NUM;
         }
      }
      else if (PalInput.Pressed(PalKey.Right))
      {
         //
         // Move the option cursor right
         //
         RoleMagic_MagicSelected[heroID]++;

         //
         // Prevent cursor from crossing boundaries
         //
         if (RoleMagic_MagicSelected[heroID] > len - 1)
         {
            RoleMagic_MagicSelected[heroID] -= COL_NUM;
            RoleMagic_BeginID[heroID] += COL_NUM;
         }
      }
      else if (PalInput.Pressed(PalKey.Search))
      {
         //
         // The user confirmed the choice
         //
         return true;
      }

      //
      // Prevent cursor from crossing boundaries
      //
      RoleMagic_BeginID[heroID] = Math.Min(
         RoleMagic_BeginID[heroID],
         (int)Math.Ceiling((listMagicID.Count - len) * 1.0 / COL_NUM) * COL_NUM
      );
      RoleMagic_BeginID[heroID] = Math.Max(RoleMagic_BeginID[heroID], 0);

      return false;
   }

   /*
   static int
      Inventory_Begin = 0,
      Inventory_Selected = 0;

   static List<Inventory> Inventory_List = new List<Inventory>();
   static Inventory_MenuType Inventory_TypeSelected = Inventory_MenuType.Use;

   enum Inventory_MenuType
   {
      Use,
      Equip,
      Throw,
   }

   public static bool
   Inventory(
      Pos      pos
   )
   {
      int                  i, len, colID, rowID, amount;
      List<Inventory>      listInventory;
      Pos                  pos1;
      Inventory            inventory;

      listInventory = S_GetSave().listInventory;

      if (listInventory.Count <= 0)
      {
         //
         // The inventory is empty
         //
         return false;
      }

      //
      // Sort out the inventory items that should be displayed
      //
      Inventory_List.Clear();
      len = Math.Min(listInventory.Count - Inventory_Begin, PAGE_ITEM_NUM);
      for (i = Inventory_Begin; Inventory_List.Count < len; i++)
      {
         inventory = listInventory[i];
         amount = inventory.Amount - inventory.AmountInUse;

         if (amount < 1)
         {
            //
            // The quantity of this item is less than 1
            //
            continue;
         }

         Inventory_List.Add(listInventory[i]);
      }

      //
      // Put inventory items on the menu
      //
      menuList.arrOption = new PalUi.Menu.Option[len];
      pos1 = pos.Clone();
      for (i = 0; i < len; i++)
      {
         colID = i % COL_NUM;
         rowID = i / COL_NUM;

         pos1.X = pos.X + colID * FONT_OFFSET * 8 + FONT_OFFSET_H_NUM;
         pos1.Y = pos.Y + rowID * FONT_OFFSET * 2 + FONT_OFFSET_H_NUM;

         inventory = Inventory_List[i];

         menuList.arrOption[i] = new PalUi.Menu.Option
         {
            text = inventory.Item.Name,
            pos = pos1.Clone(),
            align = PalAlign.Left,
            iLineHeight = FONT_OFFSET * 2,
         };

         amount = inventory.Amount - inventory.AmountInUse;

         //
         // Display the count of inventory items
         //
         pos1.X += FONT_OFFSET;
         pos1.Y += (int)(FONT_OFFSET * 1.2);
         PalText.DrawNum($"x{amount}", pos1, COLOR_GOLD);
      }

      //
      // Prevent cursor from crossing boundaries
      //
      Inventory_Selected = Math.Min(Inventory_Selected, len - 1);
      Inventory_Selected = Math.Max(Inventory_Selected, 0);
      menuList.iDefaultID = Inventory_Selected;

      //
      // Display images of inventory items
      //
      inventory = Inventory_List[Inventory_Selected];
      pos1.X = pos.X + (int)(FONT_OFFSET_H_NUM * 0.1);
      pos1.Y = pos.Y + (int)(FONT_OFFSET * 10.4) + FONT_OFFSET_H_NUM;
      PalUi.DrawItem(inventory.Item.Bitmap, pos1);

      pos1.X -= (int)(FONT_OFFSET_W_NUM * 0.8);
      pos1.Y += (int)(FONT_OFFSET * 1.8);
      PalText.DrawNum(inventory.Item.Name, pos1, fIsText: true);

      //
      // Display the description of inventory items
      //
      pos1.X = pos.X + (int)(FONT_OFFSET * 1.6) + FONT_OFFSET_W_NUM;
      pos1.Y = pos.Y + (int)(FONT_OFFSET * 8.4) + FONT_OFFSET_H_NUM;
      for (i = 0; i < inventory.Item.Description.Length; i++)
      {
         PalText.DrawText(inventory.Item.Description[i], pos1);
         pos1.Y += (int)(FONT_OFFSET * 0.95);
      }

      //
      // Display menu view
      //
      PalUi.ReadMenu(menuList);
      Screen.Update();

      //
      // Accept one frame of input
      //
      PalInput.ProcessEvent();

      //
      // Check the user input
      //
      if (PalInput.Pressed(PalKey.Up))
      {
         //
         // The option cursor moves up
         //
         Inventory_Selected -= COL_NUM;

         //
         // Prevent cursor from crossing boundaries
         //
         if (Inventory_Selected < 0)
         {
            Inventory_Selected += COL_NUM;
            Inventory_Begin -= COL_NUM;
         }
      }
      else if (PalInput.Pressed(PalKey.Down))
      {
         //
         // The option cursor moves down
         //
         Inventory_Selected += COL_NUM;

         //
         // Prevent cursor from crossing boundaries
         //
         if (Inventory_Selected > len - 1)
         {
            if (len < COL_NUM * ROW_NUM)
            {
               Inventory_Selected = len - 1;
            }
            else
            {
               Inventory_Selected -= COL_NUM;
            }
            Inventory_Begin += COL_NUM;
         }
      }
      else if (PalInput.Pressed(PalKey.Left))
      {
         //
         // The option cursor moves left
         //
         Inventory_Selected--;

         //
         // Prevent cursor from crossing boundaries
         //
         if (Inventory_Selected < 0)
         {
            if (Inventory_Begin > 0)
            {
               Inventory_Selected += COL_NUM;
            }
            Inventory_Begin -= COL_NUM;
         }
      }
      else if (PalInput.Pressed(PalKey.Right))
      {
         //
         // Move the option cursor right
         //
         Inventory_Selected++;

         //
         // Prevent cursor from crossing boundaries
         //
         if (Inventory_Selected > len - 1)
         {
            Inventory_Selected -= COL_NUM;
            Inventory_Begin += COL_NUM;
         }
      }
      else if (PalInput.Pressed(PalKey.Search))
      {
         //
         // The user confirmed the choice
         //
         return true;
      }

      //
      // Prevent cursor from crossing boundaries
      //
      Inventory_Begin = Math.Min(
         Inventory_Begin,
         (int)Math.Ceiling((listInventory.Count - len) * 1.0 / COL_NUM) * COL_NUM
      );
      Inventory_Begin = Math.Max(Inventory_Begin, 0);

      return false;
   }
   */

   public static void
   System()
   {

   }
}
