using System;

public static class HexConverter
{
   /// <summary>
   /// 高性能十六进制字符串转整数
   /// </summary>
   /// <param name="hex">十六进制字符串（支持带0x前缀）</param>
   /// <param name="result">转换结果</param>
   /// <returns>是否转换成功</returns>
   public static bool TryHexToInt(ReadOnlySpan<char> hex, out int result)
   {
      result = 0;
      if (hex.IsEmpty) return false;

      int startIndex = 0;
      bool isNegative = false;

      // 处理符号
      if (hex[0] == '-')
      {
         isNegative = true;
         startIndex++;
      }
      else if (hex[0] == '+')
      {
         startIndex++;
      }

      // 跳过 "0x" 或 "0X" 前缀
      if (startIndex + 1 < hex.Length)
      {
         if (hex[startIndex] == '0' &&
            (hex[startIndex + 1] == 'x' || hex[startIndex + 1] == 'X'))
         {
            startIndex += 2;
         }
      }

      // 检查有效长度
      if (startIndex >= hex.Length) return false;

      // 主转换循环
      uint value = 0;
      int digitCount = 0;

      for (int i = startIndex; i < hex.Length; i++)
      {
         char c = hex[i];
         uint digit;

         // 快速字符转换
         if (c >= '0' && c <= '9')
         {
            digit = (uint)(c - '0');
         }
         else if (c >= 'A' && c <= 'F')
         {
            digit = (uint)(c - 'A' + 10);
         }
         else if (c >= 'a' && c <= 'f')
         {
            digit = (uint)(c - 'a' + 10);
         }
         else
         {
            // 无效字符
            return false;
         }

         // 检查溢出（32位整数最多8个十六进制数字）
         if (digitCount >= 8)
         {
            // 检查是否超过最大值
            if (value > 0x0FFFFFFF ||
               (value == 0x0FFFFFFF && digit > (isNegative ? 0x8u : 0xFu)))
            {
               return false;
            }
         }

         // 累积值
         value = (value << 4) | digit;
         digitCount++;
      }

      // 处理负值
      if (isNegative)
      {
         // 特殊处理最小值
         if (value == 0x80000000)
         {
            result = int.MinValue;
         }
         else if (value > 0x80000000)
         {
            // 溢出检查
            return false;
         }
         else
         {
            result = -(int)value;
         }
      }
      else
      {
         result = (int)value;
      }

      return true;
   }

   /// <summary>
   /// 十六进制字符串转整数（带异常）
   /// </summary>
   public static int HexToInt(string hex)
   {
      if (!TryHexToInt(hex.AsSpan(), out int result))
      {
         throw new FormatException("无效的十六进制格式");
      }
      return result;
   }
}
