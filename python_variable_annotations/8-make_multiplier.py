#!/usr/bin/env python3
''' this module takes a float multiplier as
argument and returns a function that multiplies a float by multiplier.'''
from typing import Union, Tuple


def make_multiplier(multiplier: float):
    '''function that returns a function that multiplies a
    float by multiplier.

    Args:
        make_multiplier: floats.

    Returns:
        function that multiplies a float by multiplier.
    '''
    def second_multiplier(value: float):
        return multiplier * value
    return second_multiplier
