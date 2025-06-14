using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static GoMain;

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

      GoWord("WORD_GBK.DAT", out listWord);
      GoTalk("MSG.DAT", out listTalk);
      GoDesc("DESC.txt", out dictDesc);
      GoCodeDesc("SceneID.txt", out dictScene);
      GoCodeDesc("SpriteID.txt", out dictSprite);
      GoCodeDesc("BattleFieldID.txt", out dictBattleField);

      S_MKDIR($@"{GoMain.OUTPUT_PATH}");
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

      arrWords = File.ReadAllBytes($@"{CFG_PATH}\{name}");
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
      byte[]      arrData, arrTalk, arrWord;
      int*        ipIndex;
      string      str;

      listTalk = new List<string>();

      arrData = File.ReadAllBytes($@"{CORE_PATH}\SSS3.SMKF");
      fixed (byte* bpTmp = arrData)
      {
         ipIndex = (int*)bpTmp;

         arrTalk = File.ReadAllBytes($@"{GAME_PATH}\M.MSG");

         len = arrData.Length / sizeof(int) - 1;
         for (i = 0; i < len; i++)
         {
            size = ipIndex[i + 1] - ipIndex[i];
            arrWord = new byte[size];
            Array.Copy(arrTalk, ipIndex[i], arrWord, 0, arrWord.Length);
            str = big5.GetString(arrWord).TrimEnd();
            str = Strings.StrConv(str, VbStrConv.SimplifiedChinese);
            listTalk.Add(str);
         }
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
