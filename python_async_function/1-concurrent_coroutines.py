#!/usr/bin/env python3
''' This module takes in an integer argument (max_delay) waits for a random delay
seconds and eventually returns it.'''
# import asyncio
import random
from 0-basic_async_syntax import wait_random

async def wait_n(n, max_delay: float = 10) -> float:
    return random.randrange(0, max_delay)
