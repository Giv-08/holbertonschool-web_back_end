#!/usr/bin/env python3
''' This module that takes an integer max_delay and
returns a asyncio.Task'''

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int = 10):
    ''' This function that takes an integer max_delay
    and returns a asyncio.Task'''
    result = asyncio.Task(wait_random(max_delay))
    return result
