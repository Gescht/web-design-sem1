#!"C:\xampp\perl\bin\perl.exe"
##
##  demo CGI program which prints cgi request
##  
##
	
use strict;
use warnings;
 
print "Content-type: text/html\n\n";
my $key = '';
if ($ENV{QUERY_STRING}) {
    ($key) = $ENV{QUERY_STRING} =~ /key=(.*?)(?=&)/;
}
 
print "<h1>The key is $key</h1>";
print QUERY_STRING;