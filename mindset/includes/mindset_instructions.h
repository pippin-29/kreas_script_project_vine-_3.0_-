/*
 * Filename: /Users/pippin-29/Thynk-Unlimited/mindset_instructions/includes/mindset_instructions.h
 * Path: /Users/pippin-29/Thynk-Unlimited/mindset_instructions/includes
 * Created Date: Wednesday, February 28th 2024, 7:37:08 pm
 * Author: Daniel haddington
 * 
 * Copyright (c) 2024 Copyright © [2024] [Daniel Haddington]. All rights reserved.
 */

#ifndef MINDSET_INSTRUCTIONS_H
#define MINDSET_INSTRUCTIONS_H

# include <stdio.h>
# include <string.h>
# include <stdlib.h>
# include <math.h>
# include <stdbool.h>

typedef unsigned long long u64;

typedef struct s_md
{
	char	**set_list;
	int		c;
	int		d;
	u64		a;
	int		Qset;
	int		MdSet;
	long	find;		
	double	value;
	int		value_c;
	char	*drop_tail;
	char	*drop_tail__floor;
	char	*l;
	char	*r;
	int		floored;
	double	_floor;
	double	modifier;
	int		pattern_descriptor;
	bool	check;
}	t_md;

#define QRANGE	  					0x00000020
#define MEMORY_ALLOCATION_ERROR		555
#define OOR							5
#define SUCCESS						0

#define _A		  1
#define	_B		  2
#define	_C		  3
#define	_D		  4
#define	_E		  5
#define	_F		  6
#define	_G		  7
#define	_H		  8
#define	_I		  9
#define	_J		 10
#define	_K		 11
#define	_L		 12
#define	_M		 13
#define	_N		 14
#define	_O		 15
#define	_P		 16
#define	A_		 17
#define	B_		 18
#define	C_		 19
#define	D_		 20
#define	E_		 21
#define	F_		 22
#define	G_		 23
#define	H_		 24
#define	I_		 25
#define	J_		 26
#define	K_		 27
#define	L_		 28
#define	M_		 29
#define	N_		 30
#define	O_		 31
#define	P_		 32
#define NL		 33

#define _1_		"_A"
#define	_2_		"_B"
#define	_3_		"_C"
#define	_4_		"_D"
#define	_5_		"_E"
#define	_6_		"_F"
#define	_7_		"_G"
#define	_8_		"_H"
#define	_9_		"_I"
#define	_10_	"_J"
#define	_11_	"_K"
#define	_12_	"_L"
#define	_13_	"_M"
#define	_14_	"_N"
#define	_15_	"_O"
#define	_16_	"_P"
#define	_17_	"A_"
#define	_18_	"B_"
#define	_19_	"C_"
#define	_20_	"D_"
#define	_21_	"E_"
#define	_22_	"F_"
#define	_23_	"G_"
#define	_24_	"H_"
#define	_25_	"I_"
#define	_26_	"J_"
#define	_27_	"K_"
#define	_28_	"L_"
#define	_29_	"M_"
#define	_30_	"N_"
#define	_31_	"O_"
#define	_32_	"P_"
#define _33_	"NL"

int		lstlen(char **list);
void	error_exit(char *mess, int error_type, t_md *md);
void	exit_program(int error_type, t_md *md);
void	free_2d_char(char **f, int len);
void	init_struct(t_md *md);
void	drop_float_tail(char *dropee, int drop_size);
void	printset_modifiers(t_md *md);
void	Operation(t_md *md);
void	Check_Op(t_md *md);
int		isInteger(char *c);

#endif