import os
# noinspection PyUnusedLocal
def main(device, *args, **kwargs):
    os.system('sudo uhubctl -l 1-1 -p 2 -a 0')
