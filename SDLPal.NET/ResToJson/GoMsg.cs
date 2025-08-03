using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static SafeSys;
using static GoMain;
using static PalCommon;

public unsafe class GoMsg
{
   public static List<string>                   listWord, listTalk;
   public static Dictionary<int, string>        dictScene, dictSprite, dictBattleField;
   public static Dictionary<int, string[]>      dictDesc;

   static Encoding gbk;
   static Encoding big5;

   public static void
   Init()
   {
      Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

      gbk = Encoding.GetEncoding("GBK");
      big5 = Encoding.GetEncoding("BIG5");

      GoWord("WORD.DAT", out listWord);
      GoTalk("M.MSG", out listTalk);
      GoDesc("DESC.txt", out dictDesc);
      GoCodeDesc("SceneID.txt", out dictScene);
      GoCodeDesc("SpriteID.txt", out dictSprite);
      GoCodeDesc("BattleFieldID.txt", out dictBattleField);

      S_DirCopy($@"{CFG_PATH}\Font", "Master.ttf", $@"{GAME_PATH}\Font");
   }

   public static void
   GoWord(
         string            name,
   out   List<string>      listWord
   )
   {
      int         i, len;
      byte[]      arrWords, arrWord;

      listWord = new List<string>();

      arrWords = File.ReadAllBytes($@"{PAL_WIN_PATH}\{name}");
      arrWord = new byte[10];

      len = arrWords.Length / 10;
      for (i = 0; i < len; i++)
      {
         Array.Copy(arrWords, i * 10, arrWord, 0, 10);
         listWord.Add(gbk.GetString(arrWord).TrimEnd());
      }
   }

   public static void
   GoTalk(
         string            name,
   out   List<string>      listTalk
   )
   {
      int         i, len, size;
      byte[]      arrTalk, arrWord;
      int*        ipIndex;
      string      str;

      listTalk = new List<string>();
      ipIndex = (int*)GoData.listCoreBuf[3].Item1;
      arrTalk = File.ReadAllBytes($@"{PAL_DOS_PATH}\{name}");
      len = GoData.listCoreBuf[3].Item2 / sizeof(int) - 1;

      for (i = 0; i < len; i++)
      {
         size = ipIndex[i + 1] - ipIndex[i];
         arrWord = new byte[size];
         Array.Copy(arrTalk, ipIndex[i], arrWord, 0, arrWord.Length);
         str = big5.GetString(arrWord).TrimEnd();
         str = S_TW2CN(str);
         listTalk.Add(str);
      }
   }

   public static void
   GoDesc(
         string                        name,
   out   Dictionary<int, string[]>     dictdDesc
   )
   {
      int         i, key;
      string[]    arrDescs, arrDesc, arrVal;

      dictdDesc = new Dictionary<int, string[]>();

      arrDescs = File.ReadAllLines($@"{CFG_PATH}/{name}");

      for (i = 0; i < arrDescs.Length; i++)
      {
         arrDesc = arrDescs[i].Split('\t');
         key = Int32.Parse(arrDesc[0]);
         arrVal = arrDesc[1].Split('|');

         dictdDesc.Add(key, arrVal);
      }
   }

   public static void
   GoCodeDesc(
         string                     name,
   out   Dictionary<int, string>    dictdDesc
   )
   {
      int         i, key;
      string[]    arrDescs, arrDesc;
      string      arrVal;

      dictdDesc = new Dictionary<int, string>();

      arrDescs = File.ReadAllLines($@"{CFG_PATH}/{name}");

      for (i = 0; i < arrDescs.Length; i++)
      {
         arrDesc = arrDescs[i].Split('\t');
         key = Int32.Parse(arrDesc[0]);
         arrVal = arrDesc[1];

         dictdDesc.Add(key, arrVal);
      }
   }
}
