using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class EnemyTeam
{
   public   Enemy[]     Team1 = new Enemy[5];
   public   Enemy[]     Team2 = new Enemy[3];
   public   Enemy[]     Team3 = new Enemy[1];

   public class TeamID
   {
      public   int[]    team1 = new int[5];
      public   int[]    team2 = new int[3];
      public   int[]    team3 = new int[1];
   }
}
