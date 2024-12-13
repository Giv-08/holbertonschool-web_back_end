#!/usr/bin/env python3
""" This module demonstrates returns
the list of school having a specific topic"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
