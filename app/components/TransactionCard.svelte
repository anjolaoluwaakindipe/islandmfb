<script>
    // library imports 
    import currency from "currency.js";

    // props
    export let transactionDate;
    export let transactionType;
    export let accountOwner;
    export let otherAccount;
    export let transferAmount;
</script>


<flexboxLayout flexDirectin="row" justifyContent="space-between" alignItems="center" class ="transaction-card-container">
    <flexboxLayout flexDirection="column" class="transaction-detail-container">
        <label class="text-light text-transaction-date">
            <formattedString>
                    <span text={transactionDate}/>
            </formattedString>
        </label>
        <label class="text text-transaction-description">
            <formattedString>
                    <span text={"TRF/" + (transactionType==="credit"? "FRM ":"To ") + otherAccount}/>
            </formattedString>
        </label>
        <label class="text text-transaction-description">
            <formattedString>
                    <span text={(transactionType==="credit"? "To ":"FRM ") + accountOwner}/>
            </formattedString>
        </label>
    </flexboxLayout>

    <flexboxLayout>
        <label class="text text-transaction-amount" style={transactionType==="credit"?"color: #226F37;": "color: #BC4B52;"} textWrap={false}>
            <formattedString>
                    <span text={"N " + currency(transferAmount, {separator:",",symbol: " "}).format()}/>
            </formattedString>
        </label>
    </flexboxLayout>
</flexboxLayout>

<style>
    .transaction-card-container{
        background-color: #F1F1F1;
        padding: 10 20;
        margin-bottom: 15;
        border-radius: 10;
    }
    .transaction-detail-container{
        width: 60%;
        margin-right: 20;
    }
</style>