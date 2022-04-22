# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: movie.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0bmovie.proto\x12\x0cmoviePackage\"\x07\n\x05\x45mpty\"7\n\x10\x41llMovieResponse\x12#\n\x06movies\x18\x01 \x03(\x0b\x32\x13.moviePackage.Movie\"\'\n\x12SearchMovieRequest\x12\x11\n\tmovieName\x18\x01 \x01(\t\";\n\x08\x42\x36\x34Image\x12\x10\n\x08\x62\x36\x34image\x18\x01 \x01(\t\x12\r\n\x05width\x18\x02 \x01(\x05\x12\x0e\n\x06height\x18\x03 \x01(\x05\"\xcd\x01\n\x05Movie\x12\r\n\x05title\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x10\n\x08subTitle\x18\x03 \x01(\t\x12(\n\x08titleImg\x18\x04 \x01(\x0b\x32\x16.moviePackage.B64Image\x12-\n\rbackgroundImg\x18\x05 \x01(\x0b\x32\x16.moviePackage.B64Image\x12\'\n\x07\x63\x61rdImg\x18\x06 \x01(\x0b\x32\x16.moviePackage.B64Image\x12\x0c\n\x04type\x18\x07 \x01(\t\"9\n\x13SearchMovieResponse\x12\"\n\x05movie\x18\x01 \x03(\x0b\x32\x13.moviePackage.Movie2\x9b\x01\n\x0cMovieService\x12=\n\x06GetAll\x12\x13.moviePackage.Empty\x1a\x1e.moviePackage.AllMovieResponse\x12L\n\x05Seach\x12 .moviePackage.SearchMovieRequest\x1a!.moviePackage.SearchMovieResponseb\x06proto3')



_EMPTY = DESCRIPTOR.message_types_by_name['Empty']
_ALLMOVIERESPONSE = DESCRIPTOR.message_types_by_name['AllMovieResponse']
_SEARCHMOVIEREQUEST = DESCRIPTOR.message_types_by_name['SearchMovieRequest']
_B64IMAGE = DESCRIPTOR.message_types_by_name['B64Image']
_MOVIE = DESCRIPTOR.message_types_by_name['Movie']
_SEARCHMOVIERESPONSE = DESCRIPTOR.message_types_by_name['SearchMovieResponse']
Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), {
  'DESCRIPTOR' : _EMPTY,
  '__module__' : 'movie_pb2'
  # @@protoc_insertion_point(class_scope:moviePackage.Empty)
  })
_sym_db.RegisterMessage(Empty)

AllMovieResponse = _reflection.GeneratedProtocolMessageType('AllMovieResponse', (_message.Message,), {
  'DESCRIPTOR' : _ALLMOVIERESPONSE,
  '__module__' : 'movie_pb2'
  # @@protoc_insertion_point(class_scope:moviePackage.AllMovieResponse)
  })
_sym_db.RegisterMessage(AllMovieResponse)

SearchMovieRequest = _reflection.GeneratedProtocolMessageType('SearchMovieRequest', (_message.Message,), {
  'DESCRIPTOR' : _SEARCHMOVIEREQUEST,
  '__module__' : 'movie_pb2'
  # @@protoc_insertion_point(class_scope:moviePackage.SearchMovieRequest)
  })
_sym_db.RegisterMessage(SearchMovieRequest)

B64Image = _reflection.GeneratedProtocolMessageType('B64Image', (_message.Message,), {
  'DESCRIPTOR' : _B64IMAGE,
  '__module__' : 'movie_pb2'
  # @@protoc_insertion_point(class_scope:moviePackage.B64Image)
  })
_sym_db.RegisterMessage(B64Image)

Movie = _reflection.GeneratedProtocolMessageType('Movie', (_message.Message,), {
  'DESCRIPTOR' : _MOVIE,
  '__module__' : 'movie_pb2'
  # @@protoc_insertion_point(class_scope:moviePackage.Movie)
  })
_sym_db.RegisterMessage(Movie)

SearchMovieResponse = _reflection.GeneratedProtocolMessageType('SearchMovieResponse', (_message.Message,), {
  'DESCRIPTOR' : _SEARCHMOVIERESPONSE,
  '__module__' : 'movie_pb2'
  # @@protoc_insertion_point(class_scope:moviePackage.SearchMovieResponse)
  })
_sym_db.RegisterMessage(SearchMovieResponse)

_MOVIESERVICE = DESCRIPTOR.services_by_name['MovieService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _EMPTY._serialized_start=29
  _EMPTY._serialized_end=36
  _ALLMOVIERESPONSE._serialized_start=38
  _ALLMOVIERESPONSE._serialized_end=93
  _SEARCHMOVIEREQUEST._serialized_start=95
  _SEARCHMOVIEREQUEST._serialized_end=134
  _B64IMAGE._serialized_start=136
  _B64IMAGE._serialized_end=195
  _MOVIE._serialized_start=198
  _MOVIE._serialized_end=403
  _SEARCHMOVIERESPONSE._serialized_start=405
  _SEARCHMOVIERESPONSE._serialized_end=462
  _MOVIESERVICE._serialized_start=465
  _MOVIESERVICE._serialized_end=620
# @@protoc_insertion_point(module_scope)
