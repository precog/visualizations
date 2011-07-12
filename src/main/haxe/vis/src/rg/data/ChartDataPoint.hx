/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

typedef ChartDataPoint<T> = 
{> DataPoint<T>,
	segment : String,
	axes : String
}