### difference between HTTP 1.1 and HTTP 2.0 versions

| HTTP 1.1                                                                                                      | HTTP 2.0                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| All requests and responses are in plain text format                                                           | All messages and encapsulated in Binary Format                                                                  |
| Loads resources one after the other so if one resource is not loaded it prevents the others as well behind it | Uses a single TCP connection to load multiple streams of data at once so no resource end up blocking the others |
| Slower Loading time                                                                                           | Fast Loading time                                                                                               |
| Doesnt have the features                                                                                      | Supports header compression, multiplexing                                                                       |
| Requires a lot of optimization for performance                                                                | Eliminates the requirement for Optimization Hacks                                                               |
