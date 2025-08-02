using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static PalCommon;
using static PalConfig;
using static SafeSys;
using static System.Runtime.InteropServices.JavaScript.JSType;

public class PalLog
{
   private  static   string[]          LOG_HEAD = [
      "None", "Error", "Warning", "Debug", "Info", "All",
   ];

   private  static   StreamWriter      LogWriter;

   public enum Level
   {
      None = 0,
      Error,
      Warning,
      Debug,
      Info,
      All,
   }

   public static void
   Init()
   {
      string      logPath;

      S_MKDIR(LOG_PATH);

      try
      {
#if DEBUG
         logPath = $@"{LOG_PATH}\Debug.txt";
#else
         logPath = $@"{LOG_PATH}\{S_GetCurrDate()}";
         S_MKDIR(logPath);
         logPath += $@"\{S_GetCurrTime()}.txt";
#endif // DEBUG

         LogWriter = new StreamWriter(logPath, false, Encoding.UTF8);
      }
      catch (Exception e)
      {
         S_FAILED(
            "PalLog.Init",
            e.Message
         );
      }
   }

   public static void
   Go(
      string      log,
      Level       level = Level.Info
   )
   {
      log = $"[{LOG_HEAD[(int)level]}]  {log}";

      if (log.Last() != '.')
      {
         log += '.';
      }

      try
      {
         if (g_Config.control.fLogLevel >= level)
         {
            Console.WriteLine(log);

            LogWriter.WriteLine(log);
            LogWriter.Flush();
         }
      }
      catch (Exception e)
      {
         S_FAILED(
            "PalLog.Go",
            e.Message
         );
      }
   }

   public static void
   Free()
   {
      if (LogWriter != null)
      {
         LogWriter.Dispose();
      }
   }
}
