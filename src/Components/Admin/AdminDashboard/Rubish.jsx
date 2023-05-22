
<Card>
<Head><span>
Total Marchants
    </span>
    <span>:</span>
    </Head>
<Content>
    <Amount>{seller?.length }</Amount>
    {/* <Percent>50%</Percent> */}
</Content>
</Card>
<Card>
<Head><span>
Total Customers
    </span>
    <span>:</span>
    </Head>
<Content>
    <Amount>{customersData?.length }</Amount>
    {/* <Percent>50%</Percent> */}
</Content>
</Card>
<Card>
<Head><span>
Completed Orders
    </span>
    <span>:</span>
    </Head>
<Content>
    <Amount>{myData?.length }</Amount>
    {/* <Percent>50%</Percent> */}
</Content>
</Card>
<Card>
<Head><span>
Pending Orders
    </span>
    <span>:</span>
    </Head>
<Content>
    <Amount>{pending?.length }</Amount>
    {/* <Percent>50%</Percent> */}
</Content>
</Card>
<Card>
<Head><span>
Cancled
    </span>
    <span>:</span>
    </Head>
<Content>
      <Amount>{ cancked?.length}</Amount>
    {/* <Percent>50%</Percent> */}
</Content>
</Card>