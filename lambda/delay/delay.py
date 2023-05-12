import time

def on_event(event, context): 
	time_to_wait = int(event['ResourceProperties']['SleepTime'])
	print('going to sleep')
	time.sleep(time_to_wait)
	print('returing you to your normal program')
