/*
 * Filename: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine-_3.0_-/mindset/source/md_set[2]-md_set[16].c\002
 * Path: /Users/pippin-29/Thynk-Unlimited/kreas_script_project_vine-_3.0_-
 * Created Date: Sunday, March 3rd 2024, 11:07:07 pm
 * Author: Daniel haddington
 * 
 * Copyright (c) 2024 Copyright © [2024] [Daniel Haddington]. All rights reserved.
 */

#include "../includes/mindset_instructions.h"

void init_struct(t_md *md)
{
	int	i;

	i = 1;
	md->set_list = malloc(sizeof(char *) * (QRANGE + 1));
	
	md->set_list[_A]   = strdup("_A");		   
	md->set_list[_B]   = strdup("_B");		
	md->set_list[_C]   = strdup("_C");		
	md->set_list[_D]   = strdup("_D");		
	md->set_list[_E]   = strdup("_E");		
	md->set_list[_F]   = strdup("_F");		
	md->set_list[_G]   = strdup("_G");		
	md->set_list[_H]   = strdup("_H");		
	md->set_list[_I]   = strdup("_I");		
	md->set_list[_J]   = strdup("_J");		
	md->set_list[_K]   = strdup("_K");		
	md->set_list[_L]   = strdup("_L");		
	md->set_list[_M]   = strdup("_M");		
	md->set_list[_N]   = strdup("_N");		
	md->set_list[_O]   = strdup("_O");		
	md->set_list[_P]   = strdup("_P");		
	md->set_list[A_]   = strdup("A_");		
	md->set_list[B_]   = strdup("B_");		
	md->set_list[C_]   = strdup("C_");		
	md->set_list[D_]   = strdup("D_");		
	md->set_list[E_]   = strdup("E_");		
	md->set_list[F_]   = strdup("F_");		
	md->set_list[G_]   = strdup("G_");		
	md->set_list[H_]   = strdup("H_");		
	md->set_list[I_]   = strdup("I_");		
	md->set_list[J_]   = strdup("J_");		
	md->set_list[K_]   = strdup("K_");		
	md->set_list[L_]   = strdup("L_");		
	md->set_list[M_]   = strdup("M_");		
	md->set_list[N_]   = strdup("N_");		
	md->set_list[O_]   = strdup("O_");		
	md->set_list[P_]   = strdup("P_");		
}

void	drop_float_tail(char *dropee, int drop_s)
{
	int i;

	i = 0;
	while (dropee[i])
	{
		i++;
		if (dropee[i] == '.')
		{
			while (drop_s-- + 1)
				i++;
			while(dropee[i])
			{
				dropee[i] = 0;
				i++;
			}
		}
	}
}

void	printset_modifiers(int set, t_md *md)
{
	double modifier;
	int pattern_descriptor;
	double _floor;

	pattern_descriptor = 1;
	modifier = 0.0;
	_floor = 0;
	int floored;
	char *l;
	char *r;
	char *drop_tail;
	char *drop_tail__floor;
	int mdset;

	mdset = 1;
	drop_tail__floor = malloc(sizeof(char) * 32);
	drop_tail = malloc(sizeof(char) * 32);
	floored = 0;
		
	printf("\n\n __________________________________________________________________________________________________\n");
	printf("|                                           Index: %02d                                             |\n", set);
	printf("⎿_________________________________________________________________________________________________⏌\n");

	while(pattern_descriptor <= 32)
	{
		modifier = md->value / pattern_descriptor;
		sprintf(drop_tail, "%f", modifier);
		drop_float_tail(drop_tail, 3);
		modifier = strtod(drop_tail, NULL);
		_floor = pattern_descriptor * modifier;
		sprintf(drop_tail__floor, "%f", _floor);
		drop_float_tail(drop_tail__floor, 3);
		_floor = strtod(drop_tail__floor, NULL);
		
		if  (_floor > md->value)
		{
			l = strdup("⎿");
			r = strdup("⏌");
			floored = floorf(_floor);
		}
		else if (_floor < md->value)
		{
			floored = ceilf(_floor);
			l = strdup("⎾");
			r = strdup("⏋");
		}
		else if (_floor == md->value)
		{
			l = strdup("_");
			floored = md->value;
			r = strdup("_");
		}
			
		printf("|%4s%02d = [%02d][x %8.3f] = %s%8.4f%s = %4d |", md->set_list[pattern_descriptor], set, pattern_descriptor, modifier, l, _floor, r, floored);
		if (floored != md->value)
			exit(5);
		pattern_descriptor++;
		md->value++;
		if (pattern_descriptor % 2 == 1 && pattern_descriptor != 1) 
			printf("\n");
	}
	printf("⎿_________________________________________________________________________________________________⏌\n");
}

int main(void)
{
	t_md *md;

	md = malloc(sizeof(t_md));
	init_struct(md);
	int set;
	int mdset;

	md->value = 1;
	set = 1;
	mdset = 1;
	
	while (set <= 16 * 16)
	{
		printset_modifiers(set, md);	
		set++;
	}
}