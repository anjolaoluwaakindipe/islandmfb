<script>
    export let accountType;
    export let accountNumber;
    export let accountBalance;
    export let bookBalance;
</script>

<flexboxLayout flexDirection="column" class="balance-container" >
    <!-- Header Text -->
    <flexboxLayout flexDirection="row" >
        <label class="text-light text-header">
            <formattedString>
                    <span text={accountType+ "    "}/>
            </formattedString>
        </label>
        <label class="text-bold text-account-number">
            <formattedString>
                    <span text={accountNumber}/>
            </formattedString>
        </label>
    </flexboxLayout>

    <label class="text text-account-balance" style="color: #BC4B52;">
        <formattedString>
                <span text={"N " + accountBalance}/>
        </formattedString>
    </label>

    <label class="text-light text-available">
        <formattedString>
                <span text={"Available Balance"}/>
        </formattedString>
    </label>

    <flexboxLayout flexDirection="row" class="book-balance-container" >
        <label class="text-light text-header">
            <formattedString>
                    <span text={"Book Balance      " }/>
            </formattedString>
        </label>
        <label class="text-bold text-header">
            <formattedString>
                    <span text={"N  "+bookBalance}/>
            </formattedString>
        </label>
    </flexboxLayout>
</flexboxLayout>


<style>
    .balance-container{
        background-color: #F1F1F1;
        padding: 15 15;
        border-radius: 5;
    }
    .text-account-balance{
        font-size: 35;
        margin-bottom: 0;
    }
    .book-balance-container{
        margin-top: 8;
    }
    .text-available{
        margin-top: -15;
    }
</style>