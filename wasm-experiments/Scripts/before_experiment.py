# noinspection PyUnusedLocal
import os
import time
import multiprocessing as mp
def tap(device, *args, **kwargs):
    i = 0
    while i < 60000000:
        time.sleep(1)
        i += 1
        if i % 120 == 0:
            device.shell('input tap 300 600')
            print("Tapped!", end= '\r')
        else:
            print("Running for " + str(i) + "s.", end= '\r')
    return 
def main(device, *args, **kwargs):
    process = mp.Process(target=tap, args=(device, args, kwargs)) 
    process.start()
    pass