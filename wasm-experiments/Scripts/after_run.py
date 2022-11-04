# noinspection PyUnusedLocal
import os

def main(device, *args, **kwargs):
    # device.shell('input tap 600 1000')  # Prevent the device from sleeping
    os.system('sudo uhubctl -l 1-1 -p 2 -a 1')
    print('=DONE=')
