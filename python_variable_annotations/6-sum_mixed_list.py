#!/usr/bin/env python3
''' this module takes a list input_list of
floats as argument and returns their sum as a float.'''
from typing import Union


def sum_mixed_list(mxd_lst: Union[int, float]) -> float:
    '''function that returns sum as a float.

    Args:
        mxd_list (list): A list of integers and floats.

    Returns:
        float: convert sum to float.
    '''
    return float(sum(mxd_lst))
