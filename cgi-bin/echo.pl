#!"C:\xampp\perl\bin\perl.exe"
##
##  demo CGI program which prints cgi request
##  
##
	
use strict;
use warnings;
 
print "Content-type: text/html\n\n";
my $name = '';
if ($ENV{QUERY_STRING}) {
    ($name) = $ENV{QUERY_STRING} =~ /^name=(.*?)(?=&)/;
}
 
print "Hello $name\n";