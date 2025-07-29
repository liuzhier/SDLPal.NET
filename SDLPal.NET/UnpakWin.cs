using System.Runtime.CompilerServices;
using static SafeSys;

public unsafe partial class PalUnpak
{
   private struct YJ2_TreeNode
   {
      public ushort weight;
      public ushort value;
      public YJ2_TreeNode* parent;
      public YJ2_TreeNode* left;
      public YJ2_TreeNode* right;
   }

   private struct YJ2_Tree
   {
      public YJ2_TreeNode* node;
      public YJ2_TreeNode** list;
   }

   private static ReadOnlySpan<byte> yj2_data1 =>
   [
       0x3f, 0x0b, 0x17, 0x03, 0x2f, 0x0a, 0x16, 0x00, 0x2e, 0x09, 0x15, 0x02, 0x2d, 0x01, 0x08, 0x00,
        0x3e, 0x07, 0x14, 0x03, 0x2c, 0x06, 0x13, 0x00, 0x2b, 0x05, 0x12, 0x02, 0x2a, 0x01, 0x04, 0x00,
        0x3d, 0x0b, 0x11, 0x03, 0x29, 0x0a, 0x10, 0x00, 0x28, 0x09, 0x0f, 0x02, 0x27, 0x01, 0x08, 0x00,
        0x3c, 0x07, 0x0e, 0x03, 0x26, 0x06, 0x0d, 0x00, 0x25, 0x05, 0x0c, 0x02, 0x24, 0x01, 0x04, 0x00,
        0x3b, 0x0b, 0x17, 0x03, 0x23, 0x0a, 0x16, 0x00, 0x22, 0x09, 0x15, 0x02, 0x21, 0x01, 0x08, 0x00,
        0x3a, 0x07, 0x14, 0x03, 0x20, 0x06, 0x13, 0x00, 0x1f, 0x05, 0x12, 0x02, 0x1e, 0x01, 0x04, 0x00,
        0x39, 0x0b, 0x11, 0x03, 0x1d, 0x0a, 0x10, 0x00, 0x1c, 0x09, 0x0f, 0x02, 0x1b, 0x01, 0x08, 0x00,
        0x38, 0x07, 0x0e, 0x03, 0x1a, 0x06, 0x0d, 0x00, 0x19, 0x05, 0x0c, 0x02, 0x18, 0x01, 0x04, 0x00,
        0x37, 0x0b, 0x17, 0x03, 0x2f, 0x0a, 0x16, 0x00, 0x2e, 0x09, 0x15, 0x02, 0x2d, 0x01, 0x08, 0x00,
        0x36, 0x07, 0x14, 0x03, 0x2c, 0x06, 0x13, 0x00, 0x2b, 0x05, 0x12, 0x02, 0x2a, 0x01, 0x04, 0x00,
        0x35, 0x0b, 0x11, 0x03, 0x29, 0x0a, 0x10, 0x00, 0x28, 0x09, 0x0f, 0x02, 0x27, 0x01, 0x08, 0x00,
        0x34, 0x07, 0x0e, 0x03, 0x26, 0x06, 0x0d, 0x00, 0x25, 0x05, 0x0c, 0x02, 0x24, 0x01, 0x04, 0x00,
        0x33, 0x0b, 0x17, 0x03, 0x23, 0x0a, 0x16, 0x00, 0x22, 0x09, 0x15, 0x02, 0x21, 0x01, 0x08, 0x00,
        0x32, 0x07, 0x14, 0x03, 0x20, 0x06, 0x13, 0x00, 0x1f, 0x05, 0x12, 0x02, 0x1e, 0x01, 0x04, 0x00,
        0x31, 0x0b, 0x11, 0x03, 0x1d, 0x0a, 0x10, 0x00, 0x1c, 0x09, 0x0f, 0x02, 0x1b, 0x01, 0x08, 0x00,
        0x30, 0x07, 0x0e, 0x03, 0x1a, 0x06, 0x0d, 0x00, 0x19, 0x05, 0x0c, 0x02, 0x18, 0x01, 0x04, 0x00
   ];

   private static ReadOnlySpan<byte> yj2_data2 =>
   [
       0x08, 0x05, 0x06, 0x04, 0x07, 0x05, 0x06, 0x03, 0x07, 0x05, 0x06, 0x04, 0x07, 0x04, 0x05, 0x03
   ];

   private static void yj2_adjust_tree(YJ2_Tree tree, ushort value)
   {
      YJ2_TreeNode* node = tree.list[value];
      YJ2_TreeNode tmp;
      YJ2_TreeNode* tmp1;
      YJ2_TreeNode* temp;
      while (node->value != 0x280)
      {
         temp = node + 1;
         while (node->weight == temp->weight)
            temp++;
         temp--;
         if (temp != node)
         {
            tmp1 = node->parent;
            node->parent = temp->parent;
            temp->parent = tmp1;
            if (node->value > 0x140)
            {
               node->left->parent = temp;
               node->right->parent = temp;
            }
            else
               tree.list[node->value] = temp;
            if (temp->value > 0x140)
            {
               temp->left->parent = node;
               temp->right->parent = node;
            }
            else
               tree.list[temp->value] = node;
            tmp = *node;
            *node = *temp;
            *temp = tmp;
            node = temp;
         }
         node->weight++;
         node = node->parent;
      }
      node->weight++;
   }

   private static int yj2_build_tree(YJ2_Tree* tree)
   {
      int i, ptr;
      YJ2_TreeNode** list;
      YJ2_TreeNode* node;
      if ((tree->list = list = (YJ2_TreeNode**)S_MALLOC(sizeof(YJ2_TreeNode*) * 321)) == null)
         return 0;
      if ((tree->node = node = (YJ2_TreeNode*)S_MALLOC(sizeof(YJ2_TreeNode) * 641)) == null)
      {
         S_FREE(list);
         return 0;
      }
      S_MEMSET((nint)list, 0, 321 * sizeof(YJ2_TreeNode*));
      S_MEMSET((nint)node, 0, 641 * sizeof(YJ2_TreeNode));
      for (i = 0; i <= 0x140; i++)
         list[i] = node + i;
      for (i = 0; i <= 0x280; i++)
      {
         node[i].value = (ushort)i;
         node[i].weight = 1;
      }
      tree->node[0x280].parent = tree->node + 0x280;
      for (i = 0, ptr = 0x141; ptr <= 0x280; i += 2, ptr++)
      {
         node[ptr].left = node + i;
         node[ptr].right = node + i + 1;
         node[i].parent = node[i + 1].parent = node + ptr;
         node[ptr].weight = (ushort)(node[i].weight + node[i + 1].weight);
      }
      return 1;
   }

   private static int yj2_bt(byte* data, uint pos)
   {
      return (data[pos >> 3] & (byte)(1 << (Unsafe.BitCast<uint, int>(pos) & 0x7))) >> (Unsafe.BitCast<uint, int>(pos) & 0x7);
   }

   public static int GetDecompressSize(void* input) => *(int*)input;

   public static int YJ2_Decompress(
       byte* Source,
       byte* Destination,
       int DestSize
   )
   {
      int Length;
      uint len = 0, ptr = 0;
      byte* src = (byte*)Source + 4;
      byte* dest;
      YJ2_Tree tree;
      YJ2_TreeNode* node;

      if (Source == null)
         return -1;

      if (!(yj2_build_tree(&tree) != 0))
         return -1;

      Length = (*((int*)Source));
      if (Length > DestSize)
         return -1;
      dest = (byte*)Destination;

      while (true)
      {
         ushort val;
         node = tree.node + 0x280;
         while (node->value > 0x140)
         {
            if (yj2_bt(src, ptr) != 0)
               node = node->right;
            else
               node = node->left;
            ptr++;
         }
         val = node->value;
         if (tree.node[0x280].weight == 0x8000)
         {
            int i;
            for (i = 0; i < 0x141; i++)
               if ((tree.list[i]->weight & 0x1) != 0)
                  yj2_adjust_tree(tree, (ushort)i);
            for (i = 0; i <= 0x280; i++)
               tree.node[i].weight >>= 1;
         }
         yj2_adjust_tree(tree, val);
         if (val > 0xff)
         {
            int i;
            uint temp, tmp, pos;
            byte* pre;
            for (i = 0, temp = 0; i < 8; i++, ptr++)
               temp |= (uint)yj2_bt(src, ptr) << i;
            tmp = temp & 0xff;
            for (; i < yj2_data2[(int)(tmp & 0xf)] + 6; i++, ptr++)
               temp |= (uint)yj2_bt(src, ptr) << i;
            temp >>= yj2_data2[(int)(tmp & 0xf)];
            pos = (temp & 0x3f) | ((uint)yj2_data1[(int)tmp] << 6);
            if (pos == 0xfff)
               break;
            pre = dest - pos - 1;
            for (i = 0; i < val - 0xfd; i++)
               *dest++ = *pre++;
            len += (uint)(val - 0xfd);
         }
         else
         {
            *dest++ = (byte)val;
            len++;
         }
      }

      S_FREE(tree.list);
      S_FREE(tree.node);
      return Length;
   }
}
