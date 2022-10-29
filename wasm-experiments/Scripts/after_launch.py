# noinspection PyUnusedLocal,PyUnusedLocal
def main(device, *args, **kwargs):
    # Enable for Web Experiments using Chrome
    # Tap coordinates can be found by enabling 'Pointer location' in Developer options
    # Accept Chrome policy prompts
    device.shell('input tap 448 1668')
    device.shell('input tap 145 1680')
    
    # Enable permissions for Chrome
    device.shell('pm grant com.android.chrome android.permission.RECORD_AUDIO')
    device.shell('pm grant com.android.chrome android.permission.CAMERA')
    device.shell('pm grant com.android.chrome android.permission.WRITE_EXTERNAL_STORAGE')
    device.shell('pm grant com.android.chrome android.permission.READ_EXTERNAL_STORAGE')
    pass
