# file_metadata = {
#     'name': 'config.json',
#     'parents': ['appDataFolder']
# }
# media = MediaFileUpload('files/config.json',
#                         mimetype='application/json',
#                         resumable=True)
# file = drive_service.files().create(body=file_metadata,
#                                     media_body=media,
#                                     fields='id').execute()
# print 'File ID: %s' % file.get('id')
