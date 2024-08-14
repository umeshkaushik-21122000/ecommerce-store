import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  export function TableComponent({codeResult,data}:any) {
    console.log("this is data inside table",data);
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead >Amount</TableHead>
            <TableHead className="text-right">QUANTITY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.items.map((product:any,index:number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index+1}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>$ {product.price}</TableCell>
              <TableCell className="text-right">{product.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{codeResult!=''&& codeResult!=null && <span className="bg-red-500 p-3 rounded">10% off Applied</span>} $ {data.total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  
