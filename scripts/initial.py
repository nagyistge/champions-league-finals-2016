#!/usr/bin/env python
# -*- coding: utf-8 -*-
import time
import ConfigParser
from datetime import datetime
from powertrack.api import PowerTrack
from cartodb import CartoDBAPIKey, FileImport


config = ConfigParser.RawConfigParser()
config.read("champions.conf")

ACCOUNT_NAME = config.get('cartodb', 'account_name')
API_KEY = config.get('cartodb', 'api_key')
TABLE_NAME = config.get('cartodb', 'table_name')
START_TIMESTAMP = datetime.strptime(config.get('interval', 'start_timestamp'), "%Y%m%d%H%M")
END_TIMESTAMP = datetime.strptime(config.get('interval', 'end_timestamp'), "%Y%m%d%H%M")

p = PowerTrack(api="search")
cdb = CartoDBAPIKey(API_KEY, ACCOUNT_NAME)

categories = [
        ["#HalaMadrid", "#APorLaUndecima", "#RMUCL", "#RMFans", "#RMCity", "#RmHistory", "@realmadrid", "@realmadriden", "@readmadridfra", "@realmadridarab", "@realmadridjapan"],
        ["#LaUndecima"],
        ["Zidane"],
        ["Gareth Bale", "@GarethBale11"],
        ["Sergio Ramos", "@SergioRamos"],
        ["Cristiano Ronaldo", "@Cristiano"],
        ["Keylor Navas", "@NavasKeylor"],
        ["@officialpepe"],
        ["Luka Modric", "@lm19official"],
        ["Lucas Vázquez", "@Lucasvazquez91"],
        ["Casemiro", "@Casemiro"],
        ["@jamesdrodriguez"],
        ["Toni Kroos", "@ToniKroos"],
        ["Benzema", "@Benzema"],
        ["@isco_alarcon"],
        ["Dani Carvajal", "@DaniCarvajal92"],
        ["@MarceloM12"],
        ["@raphaelvarane"],
        ["@nachofi1990"],
        ["Kiko Casilla", "@KikoCasilla13"],
        ["Rubén Yáñez", "@RYanez93"],
        ["Mateo Kovacic", "@MateoKova16"],
        ["@JeseRodriguez10"],
        ["Arbeloa", "@aarbeloa17"],
]

table_name = TABLE_NAME

for i, category in enumerate(categories):
    print category
    new_job = p.jobs.create(START_TIMESTAMP, END_TIMESTAMP, TABLE_NAME, category, geo_enrichment=False)
    if i != 14:  # 14 is Bale duplicated in the original player list
        new_job.export_tweets(category=i + 1, append=False if i == 0 else True)

import_job = FileImport(table_name + ".csv", cdb)
import_job.run()
print "SUCCESS", import_job.success

state = "uploading"
while state != "complete" and state != "failure":
    time.sleep(5)
    import_job.update()
    print import_job.state
