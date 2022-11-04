import time
# noinspection PyUnusedLocal,PyUnusedLocal
def chromeActions(device, url):
# Enable for Web Experiments using Chrome
    # Tap coordinates can be found by enabling 'Pointer location' in Developer options
    # Accept Chrome policy prompts
    device.shell('input tap 415 1185')
    device.shell('input tap 212 1100')
    device.shell('input tap 185 1216')
    device.shell('input tap 330 1100')
    device.shell('input tap 115 1200')
    device.shell('input tap 115 1150')
    device.launch_activity('com.android.chrome', 'com.google.android.apps.chrome.Main', data_uri=url,action='android.intent.action.VIEW')
    time.sleep(1)
    device.shell('input tap 350 1200')
    device.shell('input tap 130 600')

    # Enable permissions for Chrome
    device.shell('pm grant com.android.chrome android.permission.RECORD_AUDIO')
    device.shell('pm grant com.android.chrome android.permission.CAMERA')
    device.shell('pm grant com.android.chrome android.permission.WRITE_EXTERNAL_STORAGE')
    device.shell('pm grant com.android.chrome android.permission.READ_EXTERNAL_STORAGE')
    return

def sbrowserActions(device, url):
    device.shell('input tap 415 1185')
    time.sleep(1)
    device.launch_activity('com.sec.android.app.sbrowser', 'com.sec.android.app.sbrowser.SBrowserMainActivity', data_uri=url,action='android.intent.action.VIEW')
    time.sleep(1)
    device.shell('input tap 350 1100')
    device.shell('input tap 130 545')
    time.sleep(2)
    return

def main(device, *args, **kwargs):
    url = "https://10.243.134.5:54265/"
    package_name = args[1]
    if package_name == "com.android.chrome":
        chromeActions(device, url) 
    else:
        sbrowserActions(device,url)
    pass
