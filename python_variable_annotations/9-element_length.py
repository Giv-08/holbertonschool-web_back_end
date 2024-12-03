#!/usr/bin/env python3
''' this module takes a list as
argument and returns a list of tuple that contains int type'''
from typing import List, Tuple, Iterable


def element_length(lst: List[Iterable]) -> List[Tuple[str, int]]:
    '''function that returns a list of tuples containing
    the element and its length.

    Args:
        lst (List[str]): A list of strings.

    Returns:
        List[Tuple[str, int]]: A list of tuples where each tuple contains
        an element from the list and its length.
    '''
    return [(i, len(i)) for i in lst]
