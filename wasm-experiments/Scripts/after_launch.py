import time
# noinspection PyUnusedLocal,PyUnusedLocal
def main(device, *args, **kwargs):
    # Enable for Web Experiments using Chrome
    # Tap coordinates can be found by enabling 'Pointer location' in Developer options
    # Accept Chrome policy prompts
    device.shell('input tap 500 1870')
    device.shell('input tap 500 2150')
    device.shell('input tap 860 2200')
    url = "https://10.243.134.5:50856/C-Based/C/00_helloworld/dist/wasm_exec.html"
    device.launch_activity('com.android.chrome', 'com.google.android.apps.chrome.Main', data_uri=url,action='android.intent.action.VIEW')
    time.sleep(1)
    device.shell('input tap 600 2150')
    device.shell('input tap 455 970')

    # Enable permissions for Chrome
    device.shell('pm grant com.android.chrome android.permission.RECORD_AUDIO')
    device.shell('pm grant com.android.chrome android.permission.CAMERA')
    device.shell('pm grant com.android.chrome android.permission.WRITE_EXTERNAL_STORAGE')
    device.shell('pm grant com.android.chrome android.permission.READ_EXTERNAL_STORAGE')
    pass
