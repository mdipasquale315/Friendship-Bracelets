
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Friendship Bracelets 💫 Stablecoin</title>
  <meta name="description" content="A stablecoin as timeless as friendship. Mint, burn, and deposit with Friendship Bracelets." />
  <style>
    *,*::before,*::after{box-sizing:border-box}
    :root{
      --sparkle:#ffd700;--pink:#ff69b4;--lavender:#e6b3ff;--sky:#87ceeb;--peach:#ffb6c1;
      --cream:#fffef7;--soft-pink:#fff0f5;--purple:#9370db;--mint:#98ff98;
      --text:#2d1b3d;--shadow:rgba(147,112,219,.15)
    }
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Poppins:wght@300;400;600;700;800&display=swap');
    
    html{scroll-behavior:smooth}
    body{
      margin:0;font-family:'Poppins',sans-serif;
      background:linear-gradient(135deg,var(--soft-pink) 0%,var(--lavender) 50%,var(--sky) 100%);
      color:var(--text);line-height:1.6;overflow-x:hidden;position:relative;min-height:100vh
    }

    /* Sparkles animation */
    .sparkles{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
    .sparkle{position:absolute;width:4px;height:4px;background:var(--sparkle);border-radius:50%;
      animation:sparkle 3s ease-in-out infinite;opacity:0}
    @keyframes sparkle{
      0%,100%{opacity:0;transform:translateY(0) scale(0)}
      50%{opacity:1;transform:translateY(-20px) scale(1)}
    }

    /* Hearts */
    .floating-hearts{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
    .heart{position:absolute;font-size:2rem;animation:float-up 6s ease-in infinite;opacity:0}
    @keyframes float-up{
      0%{opacity:0;transform:translateY(0) rotate(0)}
      10%{opacity:.6}
      90%{opacity:.3}
      100%{opacity:0;transform:translateY(-100vh) rotate(20deg)}
    }

    .container{max-width:1200px;margin:0 auto;padding:0 20px;position:relative;z-index:1}

    /* Header */
    header{padding:20px 0;position:sticky;top:0;z-index:100;backdrop-filter:blur(20px);
      background:rgba(255,255,255,.85);border-bottom:3px solid var(--pink);
      box-shadow:0 4px 20px var(--shadow)}
    nav{display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;padding:0 20px}
    .logo{font-family:'Caveat',cursive;font-size:2.2rem;font-weight:700;
      background:linear-gradient(135deg,var(--pink),var(--purple),var(--sparkle));
      -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
      text-decoration:none;display:flex;align-items:center;gap:8px}
    .nav-links{display:flex;gap:30px;list-style:none;margin:0;padding:0}
    .nav-links a{color:var(--text);text-decoration:none;font-weight:600;transition:color .3s;-webkit-tap-highlight-color:transparent}
    .nav-links a:hover{color:var(--pink)}
    .wallet-btn{padding:12px 28px;background:linear-gradient(135deg,var(--pink),var(--purple));
      border:none;border-radius:999px;color:#fff;font-weight:700;cursor:pointer;
      transition:transform .2s,box-shadow .2s;-webkit-tap-highlight-color:transparent;
      box-shadow:0 4px 15px rgba(255,105,180,.4)}
    .wallet-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(255,105,180,.6)}
    .wallet-btn:active{transform:scale(.98)}

    /* Hero */
    .hero{min-height:85vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 20px}
    .hero-content{max-width:900px}
    .hero-title{font-family:'Caveat',cursive;font-size:clamp(3rem,8vw,6rem);font-weight:700;
      margin:0 0 20px;line-height:1.1;color:var(--text);position:relative;display:inline-block}
    .hero-title::after{content:'✨';position:absolute;right:-50px;top:-20px;font-size:3rem;
      animation:spin 3s linear infinite}
    @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    .hero-subtitle{font-size:1.4rem;color:var(--purple);margin:0 0 15px;font-weight:400}
    .hero-tagline{font-size:1.1rem;color:var(--text);margin:0 0 40px;opacity:.8}
    .cta-group{display:flex;gap:20px;justify-content:center;flex-wrap:wrap}
    .cta-primary{padding:18px 42px;background:linear-gradient(135deg,var(--pink),var(--sparkle));
      border:none;border-radius:999px;color:#fff;font-weight:700;font-size:1.15rem;
      cursor:pointer;transition:transform .2s,box-shadow .2s;text-decoration:none;
      display:inline-block;-webkit-tap-highlight-color:transparent;
      box-shadow:0 6px 20px rgba(255,215,0,.4)}
    .cta-primary:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 30px rgba(255,215,0,.6)}
    .cta-primary:active{transform:scale(.98)}
    .cta-secondary{padding:18px 42px;background:#fff;border:3px solid var(--purple);
      border-radius:999px;color:var(--purple);font-weight:700;font-size:1.15rem;
      cursor:pointer;transition:all .2s;text-decoration:none;display:inline-block;
      -webkit-tap-highlight-color:transparent}
    .cta-secondary:hover{background:var(--purple);color:#fff;transform:translateY(-3px)}
    .cta-secondary:active{transform:scale(.98)}

    /* Section styles */
    section{padding:80px 20px}
    .section-title{font-family:'Caveat',cursive;font-size:clamp(2.5rem,6vw,4rem);
      font-weight:700;text-align:center;margin:0 0 20px;color:var(--text)}
    .section-subtitle{text-align:center;color:var(--purple);font-size:1.2rem;margin:0 0 60px}

    /* Cards */
    .cards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:30px}
    .card{background:#fff;border-radius:30px;padding:40px;box-shadow:0 10px 40px var(--shadow);
      transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden;
      border:3px solid transparent}
    .card::before{content:"";position:absolute;top:0;left:0;right:0;height:6px;
      background:linear-gradient(90deg,var(--pink),var(--purple),var(--sparkle))}
    .card:hover{transform:translateY(-10px);box-shadow:0 15px 50px rgba(147,112,219,.3);
      border-color:var(--pink)}
    .card-icon{font-size:3.5rem;margin:0 0 20px;text-align:center}
    .card-title{font-size:1.8rem;font-weight:700;margin:0 0 15px;color:var(--text);text-align:center}
    .card-description{color:#666;line-height:1.8;text-align:center;margin:0 0 25px}

    /* Action cards */
    .action-card{background:linear-gradient(135deg,#fff,var(--soft-pink));padding:50px;text-align:center}
    .input-group{margin:25px 0}
    .input-group label{display:block;font-weight:600;margin:0 0 10px;color:var(--text);font-size:1.1rem}
    .input-field{width:100%;max-width:400px;padding:15px 20px;border:3px solid var(--lavender);
      border-radius:999px;font-size:1rem;font-family:'Poppins',sans-serif;
      transition:border-color .3s;background:#fff}
    .input-field:focus{outline:none;border-color:var(--pink)}
    .action-btn{padding:16px 40px;background:linear-gradient(135deg,var(--pink),var(--purple));
      border:none;border-radius:999px;color:#fff;font-weight:700;font-size:1.1rem;
      cursor:pointer;transition:transform .2s,box-shadow .2s;margin:10px 5px;
      -webkit-tap-highlight-color:transparent;box-shadow:0 4px 15px rgba(255,105,180,.4)}
    .action-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(255,105,180,.6)}
    .action-btn:active{transform:scale(.98)}
    .action-btn:disabled{opacity:.5;cursor:not-allowed;transform:none}

    /* Stats */
    .stats-container{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
      gap:25px;margin:40px 0}
    .stat-box{background:#fff;border-radius:25px;padding:35px;text-align:center;
      box-shadow:0 8px 30px var(--shadow);border:3px solid var(--lavender)}
    .stat-number{font-size:2.5rem;font-weight:800;background:linear-gradient(135deg,var(--pink),var(--sparkle));
      -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0 0 10px}
    .stat-label{color:#666;font-size:1rem;font-weight:600}

    /* Status message */
    .status-message{margin:20px 0;padding:18px;border-radius:20px;font-weight:600;text-align:center}
    .status-message.info{background:rgba(135,206,235,.2);border:2px solid var(--sky);color:#0066aa}
    .status-message.error{background:rgba(255,105,180,.2);border:2px solid var(--pink);color:#d81b60}
    .status-message.success{background:rgba(152,255,152,.2);border:2px solid var(--mint);color:#2e7d32}

    /* Features */
    .features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;margin:50px 0}
    .feature-card{background:#fff;border-radius:25px;padding:40px;text-align:center;
      box-shadow:0 8px 30px var(--shadow);transition:transform .3s;border:3px solid transparent}
    .feature-card:hover{transform:translateY(-8px);border-color:var(--pink)}
    .feature-emoji{font-size:4rem;margin:0 0 20px}
    .feature-title{font-size:1.6rem;font-weight:700;margin:0 0 15px;color:var(--text)}
    .feature-text{color:#666;line-height:1.7}

    /* Footer */
    footer{background:linear-gradient(135deg,var(--purple),var(--pink));color:#fff;
      padding:50px 20px;text-align:center;margin-top:100px;position:relative;overflow:hidden}
    footer::before{content:"✨ 💖 ✨";position:absolute;top:20px;left:50%;transform:translateX(-50%);
      font-size:2rem;opacity:.3}
    .footer-links{display:flex;gap:30px;justify-content:center;margin:20px 0;flex-wrap:wrap}
    .footer-links a{color:#fff;text-decoration:none;font-weight:600;transition:opacity .3s}
    .footer-links a:hover{opacity:.8}
    .footer-text{margin:15px 0;font-size:1.1rem}
    .footer-note{font-size:.9rem;opacity:.8;margin-top:20px}

    /* Bracelet decoration */
    .bracelet-decoration{display:flex;justify-content:center;gap:10px;margin:30px 0}
    .bead{width:20px;height:20px;border-radius:50%;display:inline-block;animation:bounce 1s ease-in-out infinite}
    .bead:nth-child(1){background:var(--pink);animation-delay:0s}
    .bead:nth-child(2){background:var(--purple);animation-delay:.1s}
    .bead:nth-child(3){background:var(--sparkle);animation-delay:.2s}
    .bead:nth-child(4){background:var(--sky);animation-delay:.3s}
    .bead:nth-child(5){background:var(--peach);animation-delay:.4s}
    @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

    /* Responsive */
    @media (max-width:768px){
      .nav-links{display:none}
      .hero-title::after{display:none}
      .cards-grid{grid-template-columns:1fr}
    }

    /* Motion safety */
    @media (prefers-reduced-motion: reduce){
      *{animation:none!important;transition:none!important}
      .sparkles,.floating-hearts{display:none}
    }
  </style>
</head>
<body>
  <!-- Sparkles -->
  <div class="sparkles" id="sparkles" aria-hidden="true"></div>
  
  <!-- Floating hearts -->
  <div class="floating-hearts" id="hearts" aria-hidden="true"></div>

  <header>
    <nav>
      <a href="#" class="logo">💕 Friendship Bracelets</a>
      <ul class="nav-links">
        <li><a href="#mint">Mint</a></li>
        <li><a href="#burn">Burn</a></li>
        <li><a href="#deposit">Deposit</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
      <button class="wallet-btn" id="connectBtn">Connect Wallet</button>
    </nav>
  </header>

  <main>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Friendship Bracelets</h1>
        <p class="hero-subtitle">A Stablecoin Built on Trust & Friendship</p>
        <p class="hero-tagline">✨ So make the friendship bracelets and be best friends!✨</p>
        <div class="bracelet-decoration">
          <span class="bead"></span>
          <span class="bead"></span>
          <span class="bead"></span>
          <span class="bead"></span>
          <span class="bead"></span>
        </div>
        <div class="cta-group">
          <a href="#mint" class="cta-primary">Start Trading</a>
          <a href="#features" class="cta-secondary">Learn More</a>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <div class="container">
      <div class="stats-container">
        <div class="stat-box">
          <div class="stat-number" id="totalSupply">0</div>
          <div class="stat-label">Total Supply</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" id="ethPrice">$0</div>
          <div class="stat-label">ETH Price</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" id="yourBalance">0</div>
          <div class="stat-label">Your Balance</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" id="contractBalance">0 ETH</div>
          <div class="stat-label">Contract Balance</div>
        </div>
      </div>
    </div>

    <!-- Mint Section -->
    <section id="mint">
      <div class="container">
        <h2 class="section-title">Mint Stablecoins</h2>
        <p class="section-subtitle">Send ETH, receive Friendship Bracelets 💫</p>
        
        <div class="cards-grid">
          <div class="card action-card">
            <div class="card-icon">🪙</div>
            <h3 class="card-title">Mint FB Tokens</h3>
            <div class="status-message info" id="mintStatus">Connect wallet to mint tokens</div>
            
            <div class="input-group">
              <label for="mintAmount">ETH Amount</label>
              <input type="number" id="mintAmount" class="input-field" placeholder="0.1" step="0.01" min="0">
            </div>
            
            <button class="action-btn" id="mintBtn" disabled>Mint Tokens ✨</button>
            
            <p style="color:#666;font-size:.9rem;margin-top:20px">
              Fee: <span id="mintFeeRate">0%</span> • You'll receive tokens equal to ETH value after fees
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Burn Section -->
    <section id="burn">
      <div class="container">
        <h2 class="section-title">Burn Stablecoins</h2>
        <p class="section-subtitle">Burn tokens, get ETH back 💖</p>
        
        <div class="cards-grid">
          <div class="card action-card">
            <div class="card-icon">🔥</div>
            <h3 class="card-title">Burn FB Tokens</h3>
            <div class="status-message info" id="burnStatus">Connect wallet to burn tokens</div>
            
            <div class="input-group">
              <label for="burnAmount">Token Amount</label>
              <input type="number" id="burnAmount" class="input-field" placeholder="100" step="1" min="0">
            </div>
            
            <button class="action-btn" id="burnBtn" disabled>Burn Tokens 🔥</button>
            
            <p style="color:#666;font-size:.9rem;margin-top:20px">
              You'll receive ETH equal to token value (minus fees)
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Deposit Section -->
    <section id="deposit">
      <div class="container">
        <h2 class="section-title">Collateral Buffer</h2>
        <p class="section-subtitle">Help maintain stability by depositing collateral ⚖️</p>
        
        <div class="cards-grid">
          <div class="card action-card">
            <div class="card-icon">💰</div>
            <h3 class="card-title">Deposit Collateral</h3>
            <div class="status-message info" id="depositStatus">Connect wallet to deposit</div>
            
            <div class="input-group">
              <label for="depositAmount">ETH Amount</label>
              <input type="number" id="depositAmount" class="input-field" placeholder="1.0" step="0.1" min="0">
            </div>
            
            <button class="action-btn" id="depositBtn" disabled>Deposit Buffer 💎</button>
            
            <p style="color:#666;font-size:.9rem;margin-top:20px">
              Earn Depositor Coins (DPC) representing your share of the buffer
            </p>
          </div>
          
          <div class="card action-card">
            <div class="card-icon">💸</div>
            <h3 class="card-title">Withdraw Collateral</h3>
            <div class="status-message info" id="withdrawStatus">Connect wallet to withdraw</div>
            
            <div class="input-group">
              <label for="withdrawAmount">DPC Amount</label>
              <input type="number" id="withdrawAmount" class="input-field" placeholder="100" step="1" min="0">
            </div>
            
            <button class="action-btn" id="withdrawBtn" disabled>Withdraw Buffer 🎁</button>
            
            <p style="color:#666;font-size:.9rem;margin-top:20px">
              Your DPC Balance: <span id="dpcBalance">0</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features">
      <div class="container">
        <h2 class="section-title">Why Friendship Bracelets?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-emoji">🔒</div>
            <h3 class="feature-title">Fully Collateralized</h3>
            <p class="feature-text">Every token is backed by ETH in the contract. Your value is always protected.</p>
          </div>
          <div class="feature-card">
            <div class="feature-emoji">⚡</div>
            <h3 class="feature-title">Instant Transactions</h3>
            <p class="feature-text">Mint and burn tokens instantly. No waiting, no hassle.</p>
          </div>
          <div class="feature-card">
            <div class="feature-emoji">📊</div>
            <h3 class="feature-title">Oracle Pricing</h3>
            <p class="feature-text">Real-time ETH pricing ensures fair value for all transactions.</p>
          </div>
          <div class="feature-card">
            <div class="feature-emoji">💎</div>
            <h3 class="feature-title">Earn with DPC</h3>
            <p class="feature-text">Deposit collateral and earn Depositor Coins representing your share.</p>
          </div>
          <div class="feature-card">
            <div class="feature-emoji">🛡️</div>
            <h3 class="feature-title">Safety First</h3>
            <p class="feature-text">Smart contracts audited and tested for maximum security.</p>
          </div>
          <div class="feature-card">
            <div class="feature-emoji">🌈</div>
            <h3 class="feature-title">Community Driven</h3>
            <p class="feature-text">Built by friends, for friends. Join our growing community!</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="bracelet-decoration">
        <span class="bead"></span>
        <span class="bead"></span>
        <span class="bead"></span>
        <span class="bead"></span>
        <span class="bead"></span>
      </div>
      <p class="footer-text">💕 Made with love and friendship 💕</p>
      <div class="footer-links">
        <a href="#">Documentation</a>
        <a href="#">Smart Contract</a>
        <a href="#">GitHub</a>
        <a href="#">Discord</a>
      </div>
      <p>&copy; 2025 Friendship Bracelets. So make the friendship bracelets.</p>
      <p class="footer-note">✨ Take the moment and taste it ✨</p>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.umd.min.js"></script>
  <script>
    // CONTRACT CONFIGURATION
    const STABLECOIN_ADDRESS = 'AI98XS5S72S1MA6JQMTGKXQUSKZAY1NW8H';
    const ORACLE_ADDRESS = '0xYourOracleAddressHere';
    
    const STABLECOIN_ABI = [
      "function mint() external payable",
      "function burn(uint256 burnStablecoinAmount) external",
      "function depositCollateralBuffer() external payable",
      "function withdrawCollateralBuffer(uint256 burnDepositorCoinAmount) external",
      "function totalSupply() external view returns (uint256)",
      "function balanceOf(address account) external view returns (uint256)",
      "function feeRatePercentage() external view returns (uint256)",
      "function depositorCoin() external view returns (address)"
    ];
    
    const DEPOSITOR_COIN_ABI = [
      "function balanceOf(address account) external view returns (uint256)"
    ];
    
    const ORACLE_ABI = [
      "function getPrice() external view returns (uint256)"
    ];

    let provider, signer, stablecoinContract, oracleContract, depositorCoinContract;
    let userAddress = null;

    // Create sparkles
    function createSparkles() {
      const container = document.getElementById('sparkles');
      for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(sparkle);
      }
    }

    // Create floating hearts
    function createHearts() {
      const container = document.getElementById('hearts');
      const hearts = ['💖', '💕', '💗', '💓', '💝'];
      setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (4 + Math.random() * 3) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
      }, 2000);
    }

    // Show status
    function showStatus(elementId, message, type = 'info') {
      const el = document.getElementById(elementId);
      el.textContent = message;
      el.className = `status-message ${type}`;
    }

    // Format number
    function formatNumber(num) {
      return parseFloat(num).toFixed(2);
    }

    // Update stats
    async function updateStats() {
      if (!stablecoinContract || !userAddress) return;
      
      try {
        const totalSupply = await stablecoinContract.totalSupply();
        const userBalance = await stablecoinContract.balanceOf(userAddress);
        const contractBalance = await provider.getBalance(STABLECOIN_ADDRESS);
        const ethPrice = await oracleContract.getPrice();
        
        document.getElementById('totalSupply').textContent = formatNumber(ethers.formatEther(totalSupply));
        document.getElementById('yourBalance').textContent = formatNumber(ethers.formatEther(userBalance));
        document.getElementById('contractBalance').textContent = formatNumber(ethers.formatEther(contractBalance)) + ' ETH';
        document.getElementById('ethPrice').textContent = '$' + ethPrice.toString();
        
        // Update DPC balance if available
        const dpcAddress = await stablecoinContract.depositorCoin();
        if (dpcAddress !== '0x0000000000000000000000000000000000000000') {
          depositorCoinContract = new ethers.Contract(dpcAddress, DEPOSITOR_COIN_ABI, signer);
          const dpcBalance = await depositorCoinContract.balanceOf(userAddress);
          document.getElementById('dpcBalance').textContent = formatNumber(ethers.formatEther(dpcBalance));
        }
        
        // Update fee rate
        const feeRate = await stablecoinContract.feeRatePercentage();
        document.getElementById('mintFeeRate').textContent = feeRate.toString() + '%';
        
      } catch (error) {
        console.error('Error updating stats:', error);
      }
    }

    // Connect wallet
    document.getElementById('connectBtn').addEventListener('click', async () => {
      if (typeof window.ethereum === 'undefined') {
        alert('Please install MetaMask!');
        return;
      }

      try {
        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();
        userAddress = await signer.getAddress();
        
        stablecoinContract = new ethers.Contract(STABLECOIN_ADDRESS, STABLECOIN_ABI, signer);
        oracleContract = new ethers.Contract(ORACLE_ADDRESS, ORACLE_ABI, provider);
        
        document.getElementById('connectBtn').textContent = userAddress.slice(0, 6) + '...' + userAddress.slice(-4);
        
        // Enable buttons
        document.getElementById('mintBtn').disabled = false;
        document.getElementById('burnBtn').disabled = false;
        document.getElementById('depositBtn').disabled = false;
        document.getElementById('withdrawBtn').disabled = false;
        
        showStatus('mintStatus', 'Wallet connected! Enter amount to mint', 'success');
        showStatus('burnStatus', 'Ready to burn tokens', 'success');
        showStatus('depositStatus', 'Ready to deposit collateral', 'success');
        showStatus('withdrawStatus', 'Ready to withdraw', 'success');
        
        await updateStats();
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet: ' + error.message);
      }
    });

    // Mint tokens
    document.getElementById('mintBtn').addEventListener('click', async () => {
      const amount = document.getElementById('mintAmount').value;
      if (!amount || amount <= 0) {
        showStatus('mintStatus', 'Please enter a valid amount', 'error');
        return;
      }

      try {
        showStatus('mintStatus', 'Minting tokens... Please confirm transaction', 'info');
        const tx = await stablecoinContract.mint({ value: ethers.parseEther(amount) });
        showStatus('mintStatus', 'Transaction sent! Waiting for confirmation...', 'info');
        await tx.wait();
        showStatus('mintStatus', 'Tokens minted successfully! 🎉', 'success');
        document.getElementById('mintAmount').value = '';
        await updateStats();
      } catch (error) {
        console.error('Mint error:', error);
        showStatus('mintStatus', 'Error: ' + (error.reason || error.message), 'error');
      }
    });

    // Burn tokens
    document.getElementById('burnBtn').addEventListener('click', async () => {
      const amount = document.getElementById('burnAmount').value;
      if (!amount || amount <= 0) {
        showStatus('burnStatus', 'Please enter a valid amount', 'error');
        return;
      }

      try {
        showStatus('burnStatus', 'Burning tokens... Please confirm transaction', 'info');
        const tx = await stablecoinContract.burn(ethers.parseEther(amount));
        showStatus('burnStatus', 'Transaction sent! Waiting for confirmation...', 'info');
        await tx.wait();
        showStatus('burnStatus', 'Tokens burned successfully! 🔥', 'success');
        document.getElementById('burnAmount').value = '';
        await updateStats();
      } catch (error) {
        console.error('Burn error:', error);
        showStatus('burnStatus', 'Error: ' + (error.reason || error.message), 'error');
      }
    });

    // Deposit collateral
    document.getElementById('depositBtn').addEventListener('click', async () => {
      const amount = document.getElementById('depositAmount').value;
      if (!amount || amount <= 0) {
        showStatus('depositStatus', 'Please enter a valid amount', 'error');
        return;
      }

      try {
        showStatus('depositStatus', 'Depositing collateral... Please confirm', 'info');
        const tx = await stablecoinContract.depositCollateralBuffer({ value: ethers.parseEther(amount) });
        showStatus('depositStatus', 'Transaction sent! Waiting for confirmation...', 'info');
        await tx.wait();
        showStatus('depositStatus', 'Collateral deposited successfully! 💎', 'success');
        document.getElementById('depositAmount').value = '';
        await updateStats();
      } catch (error) {
        console.error('Deposit error:', error);
        showStatus('depositStatus', 'Error: ' + (error.reason || error.message), 'error');
      }
    });

    // Withdraw collateral
    document.getElementById('withdrawBtn').addEventListener('click', async () => {
      const amount = document.getElementById('withdrawAmount').value;
      if (!amount || amount <= 0) {
        showStatus('withdrawStatus', 'Please enter a valid amount', 'error');
        return;
      }

      try {
        showStatus('withdrawStatus', 'Withdrawing collateral... Please confirm', 'info');
        const tx = await stablecoinContract.withdrawCollateralBuffer(ethers.parseEther(amount));
        showStatus('withdrawStatus', 'Transaction sent! Waiting for confirmation...', 'info');
        await tx.wait();
        showStatus('withdrawStatus', 'Collateral withdrawn successfully! 🎁', 'success');
        document.getElementById('withdrawAmount').value = '';
        await updateStats();
      } catch (error) {
        console.error('Withdraw error:', error);
        showStatus('withdrawStatus', 'Error: ' + (error.reason || error.message), 'error');
      }
    });

    // Initialize
    createSparkles();
    createHearts();

    // Update stats every 15 seconds
    setInterval(() => {
      if (userAddress) updateStats();
    }, 15000);
  </script>
</body>
</html>
