#!/usr/bin/env python3
''' This module takes in an integer argument (max_delay) waits for a random delay
seconds and eventually returns it.'''
import random
import asyncio


async def wait_random(max_delay: float = 10) -> float:
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
