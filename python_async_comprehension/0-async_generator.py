#!/usr/bin/env python3
""" Module for async generator task 0"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that yields 10 random float numbers
    between 0 and 10. The function waits for 1 second between each
    yield to simulate an asynchronous task and then yields a random
    float number.
    """

    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
