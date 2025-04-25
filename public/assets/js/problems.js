// Have a problem to add? Submit it here: https://forms.gle/DXjPeTL5DbJBhKRv8

let problems = [
	{
		"title": "Quadratic Formula",
		"description": "Classic.",
		"latex": String.raw`$x = frac(- b plus.minus sqrt(b^2 - 4 a c), 2 a)$`
	},
	{
		"title": "Pythagorean Theorem",
		"description": "Classic.",
		"latex": String.raw`$c = sqrt(a^2 + b^2)$`
	},
	{
		"title": String.raw`Sum of first \(n\) Squares`,
		"description": "Classic.",
		"latex": String.raw`$sum_(i = 1)^n i^2 = frac(n \( n + 1 \) \( 2 n + 1 \), 6)$`
	},
	{
		"title": "Law of Cosines",
		"description": "Classic.",
		"latex": String.raw`$c^2 = a^2 + b^2 - 2 a b cos angle C$`
	},
	{
		"title": "Legendre's formula",
		"description": "Floors.",
		"latex": String.raw`$nu_p \( n ! \) = sum_(i = 1)^oo ⌊n / p^i⌋$`
	},
	{
		"title": "Euler's Identity",
		"description": "The most beautiful equation in mathematics.",
		"latex": String.raw`$e^(pi i) + 1 = 0$`
	},
	{
		"title": "Euler's Lesser-Known Identity",
		"description": "Troll.",
		"latex": String.raw`$ceil.l e ceil.r - floor.l pi floor.r = 0$`
	},
	{
		"title": "Normal Distribution",
		"description": "Thanks to Martin for correcting this!",
		"latex": String.raw`$Phi \( x \) = frac(1, sigma sqrt(2 pi)) e^(- frac(\( x - mu \)^2, 2 sigma^2))$`
	},
	{
		"title": "Fourier Transform",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$hat(f) \( omega \) = integral_(- oo)^oo f \( x \) e^(- 2 pi i x omega) upright(d) x$`
	},
	{
		"title": "Wave Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$frac(partial^2 u, partial t^2) = c^2 frac(partial^2 u, partial x^2)$`
	},
	{
		"title": "Navier-Stokes Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$rho (frac(partial upright(bold(v)), partial t) + upright(bold(v)) dot.op nabla upright(bold(v))) = - nabla p + nabla dot.op upright(bold(T)) + upright(bold(f))$`
	},
	{
		"title": "Schrodinger's Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$i planck.reduce frac(partial, partial t) Psi = H Psi$`
	},
	{
		"title": "Black-Scholes Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$frac(partial V, partial t) + 1 / 2 sigma^2 S^2 frac(partial^2 V, partial S^2) + r S frac(partial V, partial S) - r V = 0$`
	},
	{
		"title": "Relativity",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$E = m c^2$`
	},
	{
		"title": "Chaos Theory",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$x_(t + 1) = k x_t \( 1 - x_t \)$`
	},
	{
		"title": "Definition of the Derivative",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$frac(upright(d) f, upright(d) x) = lim_(h arrow.r 0) frac(f \( x + h \) - f \( x \), h)$`
	},
	{
		"title": "Euler's Formula for Polyhedra",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$V - E + F = 2$`
	},
	{
		"title": "Gravitation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`$F = frac(G m_1 m_2, d^2)$`
	},
	{
		"title": "AM-GM",
		"description": "Fun",
		"latex": String.raw`$frac(x_1 + x_2 + dots.h.c + x_n, n) gt.eq root(n, x_1 dot.op x_2 dots.h.c x_n)$`
	},
	{
		"title": "Stirling's Approximation",
		"description": "Fun",
		"latex": String.raw`$n ! approx sqrt(2 pi n) (n / e)^n$`
	},
	{
		"title": "Stokes' Theorem",
		"description": "Fun",
		"latex": String.raw`$integral.double_S nabla times bold(F) dot upright(d)bold(S)=integral.cont_Gamma bold(F) dot upright(d) bold(Gamma)$`
	},
	{
		"title": "Divergence Theorem",
		"description": "Fun",
		"latex": String.raw`$integral.triple_V \( nabla dot.op upright(bold(F)) \) upright(d) V = integral.surf_S \( upright(bold(F)) dot.op upright(bold(n)) \) upright(d) S$`
	},
	{
		"title": "Cauchy-Schwarz Inequality",
		"description": "Fun",
		"latex": String.raw`$\| angle.l upright(bold(u)) \, upright(bold(v)) angle.r \|^2 lt.eq angle.l upright(bold(u)) \, upright(bold(u)) angle.r dot.op angle.l upright(bold(v)) \, upright(bold(v)) angle.r$`
	},
	{
		"title": "Area of a Circle",
		"description": "Simple",
		"latex": String.raw`$A = pi r^2$`
	},
	{
		"title": String.raw`Definition of \(\tau\)`,
		"description": "Troll.",
		"latex": String.raw`$tau = 2 pi$`
	},
	{
		"title": "Sophie Germain Identity",
		"description": "Simple.",
		"latex": String.raw`$a^4 + 4 b^4 = \( a^2 + 2 a b + 2 b^2 \) \( a^2 - 2 a b + 2 b^2 \)$`
	},
	{
		"title": "Pascal's Identity",
		"description": "Classic.",
		"latex": String.raw`$binom(n, k) = binom(n - 1, k) + binom(n - 1, k - 1)$`
	},
	{
		"title": "Hockey-stick Identity",
		"description": "Classic.",
		"latex": String.raw`$sum_(i = r)^n binom(i, r) = binom(n + 1, r + 1)$`
	},
	{
		"title": "Vandermonde's Identity",
		"description": "Classic.",
		"latex": String.raw`$binom(m + n, r) = sum_(k = 0)^r binom(m, k) binom(n, r - k)$`
	},
	{
		"title": "Combinations",
		"description": "Simple.",
		"latex": String.raw`$binom(n, k) = frac(n !, k ! \( n - k \) !)$`
	},
	{
		"title": "Heine's Identity",
		"description": "No idea what this is. Looks cool tho.",
		"latex": String.raw`$1 / sqrt(z - cos psi) = sqrt(2) / pi sum_(m = - oo)^oo Q_(m - 1 / 2) \( z \) e^(i m psi)$`
	},
	{
		"title": "Binomial identity",
		"description": "Classic.",
		"latex": String.raw`$\( x + y \)^n = sum_(k = 0)^n binom(n, k) x^(n - k) y^k$`
	},
	{
		"title": "Hermite's Identity",
		"description": "Hadn't heard of this either.",
		"latex": String.raw`$sum_(k = 0)^(n - 1) ⌊x + k / n⌋ = floor.l n x floor.r$`
	},
	{
		"title": "Matrix Determinant Lemma",
		"description": "Or this lmao.",
		"latex": String.raw`$det \( upright(bold(A)) + upright(bold(u)) upright(bold(v))^(⊺) \) = \( 1 + upright(bold(v))^(⊺) upright(bold(A))^(- 1) upright(bold(u)) \) det \( upright(bold(A)) \)$`
	},
	{
		"title": "Euler Product of the Riemann-Zeta function",
		"description": "Classic.",
		"latex": String.raw`$zeta \( s \) = sum_(n = 1)^oo 1 / n^s = product_(p in bb(P)) frac(1, 1 - p^(- s))$`
	},
	{
		"title": "Irrationality of the Square Root of 2",
		"description": "I just really wanted to keep using \\mathbb.",
		"latex": String.raw`$sqrt(2) in.not bb(Q)$`
	},
	{
		"title": "Heron's Formula",
		"description": "Classic.",
		"latex": String.raw`$\[ triangle.stroked.t A B C \] = sqrt(s \( s - a \) \( s - b \) \( s - c \))$`
	},
	{
		"title": "Heisenberg's Uncertainty Principle",
		"description": "Classic.",
		"latex": String.raw`$Delta x Delta p approx planck.reduce$`
	},
	{
		"title": String.raw`Continued Fraction for \(\pi/2\)`,
		"description": "@InertialObservr",
		"latex": String.raw`$pi / 2 = 1 + frac(1, 1 + frac(1, 1 / 2 + frac(1, 1 / 3 + frac(1, 1 / 4 + dots.down))))$`
	},
	{
		"title": "Sophomore's Dream",
		"description": "Cool.",
		"latex": String.raw`$integral_0^1 x^(- x) upright(d) x = sum_(n = 1)^oo n^(- n)$`
	},
	{
		"title": String.raw`Identity involving \(\pi\) and \(e\)`,
		"description": "@InertialObservr",
		"latex": String.raw`$product_(n = 2)^oo e (1 - 1 / n^2)^(n^2) = frac(pi, e sqrt(e))$`
	},
	{
		"title": "Representation of the Golden Ratio",
		"description": "Classic",
		"latex": String.raw`$phi.alt = sqrt(1 + sqrt(1 + sqrt(1 + sqrt(1 + dots.h.c))))$`
	},
	{
		"title": "The Sum of all Positive Integers",
		"description": "Troll.",
		"latex": String.raw`$sum_(n = 1)^oo n = - 1 / 12$`
	},
	{
		"title": "Inverse of a complex number",
		"description": "Gotta know \\bar man",
		"latex": String.raw`$z^(- 1) = frac(macron(z), \| z \|^2) \, forall z eq.not 0$`
	},
	{
		"title": "Definition of Convolution",
		"description": "Shout out to 6.003",
		"latex": String.raw`$\( f * g \) \( t \) = integral_(- oo)^oo f \( tau \) g \( t - tau \) upright(d) tau$`
	},
	{
		"title": "Definition of the Kronecker Delta function",
		"description": "{cases} ftw",
		"latex": String.raw`$delta_(i \, j) = cases(delim: "{", 0 & i eq.not j, 1 & i = j)$`
	},
	{
		"title": "Bayes' Theorem",
		"description": "bae's theorem",
		"latex": String.raw`$P \( A \| B \) = frac(P \( B \| A \) P \( A \), P \( B \))$`
	},
	{
		"title": String.raw`Probability Density Function of the Student's \(t\)-distribution`,
		"description": "fun",
		"latex": String.raw`$f \( t \) = frac(Gamma (frac(nu + 1, 2)), sqrt(nu pi) Gamma (nu / 2)) (1 + t^2 / nu)^(- frac(nu + 1, 2))$`
	},
	{
		"title": "De Morgan's laws",
		"description": "fun",
		"latex": String.raw`$not \( P and Q \) tack.r \( not P \) or \( not Q \)$`
	},
	{
		"title": "Principle of Inclusion-Exclusion",
		"description": "for dummies",
		"latex": String.raw`$\| A union B \| = \| A \| + \| B \| - \| A sect B \|$`
	},
	{
		"title": "General Principle of Inclusion-Exclusion",
		"description": "for galaxy brains",
		"latex": String.raw`$lr(|union.big_(i = 1)^n A_i|) = sum_(nothing eq.not J subset.eq { 1 \, dots.h \, n }) \( - 1 \)^(\| J \| + 1) lr(|sect.big_(j in J) A_j|)$`
	},
	{
		"title": String.raw`Determinant of a \(2 \times 2\) matrix`,
		"description": "{matrix}",
		"latex": String.raw`$det mat(delim: "[", a, b; c, d) = a d - b c$`
	},
	{
		"title": "Sawtooth Function",
		"description": "mathbb cases floors, this has it all",
		"latex": String.raw`$S \( x \) = cases(delim: "{", x - floor.l x floor.r - 1 \/ 2 & x in bb(R) \\ bb(Z), 0 & x in bb(Z))$`
	},
	{
		"title": "Definition of Graham's Number",
		"description": "G = g_{64}",
		"latex": String.raw`$g_n = cases(delim: "{", 3 arrow.t arrow.t arrow.t arrow.t 3 & n = 1, 3 arrow.t^(g_(n - 1)) 3 & n gt.eq 2 \, n in bb(N))$`
	},
	{
		"title": "Burnside's Lemma",
		"description": "The Lemma that is not Burnside's",
		"latex": String.raw`$\| X \/ G \| = frac(1, \| G \|) sum_(g in G) \| X^g \|$`
	},
	{
		"title": "Continuum Hypothesis",
		"description": "independent of ZFC!",
		"latex": String.raw`$aleph_0=|bb(N)|,frak(c)=|bb(R)| \ exists.not A : aleph_0 < |A| < frak(c)$`
	},
	{
		"title": "Spectral Decomposition",
		"description": "derived from memory",
		"latex": String.raw`$A = mat(delim: "(", \|, \|, , \|; upright(bold(v))_1, upright(bold(v))_2, dots.h.c, upright(bold(v))_n; \|, \|, , \|) mat(delim: "(", lambda_1, , , ; #none, lambda_2, , ; #none, , dots.down, ; #none, , , lambda_n) mat(delim: "(", \|, \|, , \|; upright(bold(v))_1, upright(bold(v))_2, dots.h.c, upright(bold(v))_n; \|, \|, , \|)^(- 1)$`
	},
	{
		"title": "Pythagorean Identity",
		"description": "basically just the Pythagorean theorem",
		"latex": String.raw`$sin^2 theta + cos^2 theta = 1$`
	},
	{
		"title": "Double Angle for \sin",
		"description": "back to basics",
		"latex": String.raw`$sin \( 2 theta \) = 2 sin \( theta \) cos \( theta \)$`
	},
	{
		"title": "Double Angle for \cos",
		"description": "back to basics",
		"latex": String.raw`$cos \( 2 theta \) = cos^2 \( theta \) - sin^2 \( theta \)$`
	},
	{
		"title": "Fermat's Last Theorem",
		"description": "have a marvelous proof, but this description's too small to contain it",
		"latex": String.raw`$exists.not { x \, y \, z \, n } in bb(N) \, n > 2 : x^n + y^n = z^n$`
	},
	{
		"title": "Fermat's Little Theorem",
		"description": "fermat's itty bitty theorem",
		"latex": String.raw`$a^p equiv a med \( mod med p \)$`
	},
	{
		"title": "Euler's Theorem",
		"description": "totients",
		"latex": String.raw`$gcd \( a \, n \) = 1 arrow.r.double.long a^(phi \( n \)) equiv 1 med \( mod med n \)$`
	},
	{
		"title": "QM-AM-GM-HM Inequality over 3 variables",
		"description": "cool-looking",
		"latex": String.raw`$sqrt(frac(a^2 + b^2 + c^2, 3)) gt.eq frac(a + b + c, 3) gt.eq root(3, a b c) gt.eq frac(3, 1 / a + 1 / b + 1 / c)$`
	},
	{
		"title": "Extended Law of Sines",
		"description": "threw in the circumradius as well",
		"latex": String.raw`$frac(a, sin angle A) = frac(b, sin angle B) = frac(c, sin angle C) = 2 R$`
	},
	{
		"title": "Integration by Parts",
		"description": "it's just the product rule really",
		"latex": String.raw`$integral u upright(d) v = u v - integral v upright(d) u$`
	},
	{
		"title": "Definition of Perfect Numbers",
		"description": "shrug",
		"latex": String.raw`${n : sum_(d \| n)^(d < n) d = n}$`
	},
	{
		"title": "Gaussian Integral",
		"description": "classic trick",
		"latex": String.raw`$integral_(- oo)^oo e^(- x^2) upright(d) x = sqrt(integral_(- oo)^oo integral_(- oo)^oo e^(- x^2 - y^2) upright(d) x upright(d) y) = sqrt(integral_0^(2 pi) integral_0^oo e^(- r^2) r upright(d) r upright(d) theta) = sqrt(pi)$`
	},
	{
		"title": "Definition of an Integral",
		"description": "why not",
		"latex": String.raw`$integral_a^b f \( x \) upright(d) x = lim_(k arrow.r oo) (\( b - a \) sum_(i = 1)^k frac(f \( a + i frac(b - a, k) \), k))$`
	},
	{
		"title": "Quantum Fourier transform",
		"description": "bra ket notation is fun",
		"latex": String.raw`$\| x angle.r arrow.r.bar 1 / sqrt(N) sum_(k = 0)^(N - 1) omega_x^k \| k angle.r$`
	},
	{
		"title": "Recursive definition of the Hadamard transform",
		"description": "matrix in cases",
		"latex": String.raw`$H_m = cases(delim: "{", 1 & m = 0, 1 / sqrt(2) mat(delim: "(", H_(m - 1), H_(m - 1); H_(m - 1), - H_(m - 1)) & m > 0)$`
	},
	{
		"title": "Wigner Transform of the Density Matrix",
		"description": "I know some of these words",
		"latex": String.raw`$W \( x \, p \) = frac(1, pi planck.reduce) integral_(- oo)^oo angle.l x + y \| hat(rho) \| x - y angle.r e^(- 2 i p y \/ planck.reduce) upright(d) y$`
	},
	{
		"title": "Imaginary numbers",
		"description": "Just gonna add some simple formulas",
		"latex": String.raw`$i^2 = - 1$`
	},
	{
		"title": "Sum of Cubes",
		"description": "Simple",
		"latex": String.raw`$a^3 + b^3 = \( a + b \) \( a^2 - a b + b^2 \)$`
	},
	{
		"title": "RSA Decryption Algorithm",
		"description": "good ol' rivest",
		"latex": String.raw`$m = c^(e^(- 1) med mod med phi.alt \( n \)) med \( mod med n \)$`
	},
	{
		"title": "Contraposition",
		"description": "logic yo",
		"latex": String.raw`$\( p arrow.r.double.long q \) arrow.l.r.double \( not q arrow.r.double.long not p \)$`
	},
	{
		"title": "Equation of a spring",
		"description": "Gonna use dots like the physicists do",
		"latex": String.raw`$m dot.double(x) = - k x$`
	},
	{
		"title": String.raw`Sum of reciprocals of partial sums of \(\ \mathbb{N}\)`,
		"description": "Credit to @IntertialObservr",
		"latex": String.raw`$sum_(i = 2)^oo frac(1, sum_(j = 1)^i j) = 1$`
	},
	{
		"title": "Binet's Formula",
		"description": "Classic",
		"latex": String.raw`$F_n = 1 / sqrt(5) (phi^n - frac(\( - 1 \)^n, phi^n))$`
	},
	{
		"title": String.raw`Sum of first \(n\) Cubes`,
		"description": "Classic",
		"latex": String.raw`$sum_(k = 0)^n k^3 = (sum_(k = 0)^n k)^2$`
	},
	{
		"title": "The Basel Problem",
		"description": "Classic",
		"latex": String.raw`$sum_(n = 1)^oo 1 / n^2 = pi^2 / 6$`
	},
	{
		"title": "Root Mean Square",
		"description": "how could i forget",
		"latex": String.raw`$f_(upright("rms")) = sqrt(frac(1, T_2 - T_1) integral_(T_1)^(T_2) \[ f \( t \) \]^2 upright(d) t)$`
	},
	{
		"title": "The Harmonic Series",
		"description": "Classic",
		"latex": String.raw`$sum_(n = 1)^oo 1 / n = oo$`
	},
	{
		"title": "Tupper's Self-Referential Formula",
		"description": "Troll",
		"latex": String.raw`$1 / 2 < ⌊med mod med (⌊y / 17⌋ 2^(- 17 floor.l x floor.r - med mod med \( floor.l y floor.r \, 17 \)) \, 2)⌋$`
	},
	{
		"title": String.raw`H\(\ddot\textbf{o}\)lder's Inequality`,
		"description": "Styled like the OTIS handouts by Evan Chen",
		"latex": String.raw`$(sum_(i = 1)^n a_i)^p (sum_(i = 1)^n b_i)^q gt.eq (sum_(i = 1)^n root(p + q, a_i^p b_i^q))^(p + q)$`
	},
	{
		"title": "Rearrangement Inequality",
		"description": "kinda cool",
		"latex": String.raw`$a_1 lt.eq a_2 lt.eq dots.h.c lt.eq a_n \, b_1 lt.eq b_2 lt.eq dots.h.c lt.eq b_n arrow.r.double.long sum_(i = 1)^n a_i b_i gt.eq sum_(i = 1)^n a_(sigma \( i \)) b_i gt.eq sum_(i = 1)^n a_(n + 1 - i) b_i$`
	},
	{
		"title": "Power Mean",
		"description": "like RMS-AM-GM-HM but like generalized",
		"latex": String.raw`$M_r \( x_1 \, x_2 \, dots.h \, x_n \) = cases(delim: "{", (1 / n sum_(i = 1)^n x_i^r)^(1 \/ r) & r eq.not 0, root(n, product_(i = 1)^n x_i) & r = 0)$`
	},
	{
		"title": "Law of Tangents",
		"description": "yes this actually exists",
		"latex": String.raw`$frac(a - b, a + b) = frac(tan (frac(angle A - angle B, 2)), tan (frac(angle A + angle B, 2)))$`
	},
	{
		"title": "Euler's Arctangent Identity",
		"description": "dammit euler OP",
		"latex": String.raw`$tan^(- 1) (1 / x) = tan^(- 1) (frac(1, x + y)) + tan^(- 1) (frac(y, x^2 + x y + 1))$`
	},
	{
		"title": "The Dirichlet Convolution",
		"description": "bruh",
		"latex": String.raw`$\( f * g \) \( n \) = sum_(d \| n) f \( d \) g (n / d)$`
	},
	{
		"title": "Sum of a Row of Pascal's Triangle",
		"description": "not sure how else to word it",
		"latex": String.raw`$binom(n, 0) + binom(n, 1) + binom(n, 2) + dots.h.c + binom(n, n) = 2^n$`
	},
	{
		"title": "Alternating Harmonic Series",
		"description": "First use of \ln",
		"latex": String.raw`$1 - 1 / 2 + 1 / 3 - 1 / 4 + 1 / 5 - dots.h.c = ln 2$`
	},
	{
		"title": "Definitions of Catalan's Constant",
		"description": "Credit to /u/heropup",
		"latex": String.raw`$G = beta \( 2 \) = sum_(k = 0)^oo frac(\( - 1 \)^k, \( 2 k + 1 \)^2) = integral.double_(\[ 0 \, 1 \]^2) frac(upright(d) x upright(d) y, 1 + x^2 y^2)$`
	},
	{
		"title": String.raw`Series Representation of Ap\(\acute\textbf{e}\)ry's Constant`,
		"description": "Credit to /u/heropup",
		"latex": String.raw`$zeta \( 3 \) = 5 / 2 sum_(n = 1)^oo frac(\( - 1 \)^(n - 1), n^3 binom(2 n, n))$`
	},
	{
		"title": "Definition of the Euler-Mascheroni Constant",
		"description": "Credit to /u/heropup",
		"latex": String.raw`$gamma = lim_(n arrow.r oo) (sum_(k = 1)^n 1 / k - ln n) = integral_1^oo (frac(1, floor.l x floor.r) - 1 / x) upright(d) x$`
	},
	{
		"title": "Mertens' therorem",
		"description": "actually his third theorem",
		"latex": String.raw`$product_(p in bb(P))^n (1 - 1 / p) tilde.op frac(e^(- gamma), log n)$`
	},
	{
		"title": "Green's First Identity",
		"description": "Credit to Varge",
		"latex": String.raw`$integral_Omega \( psi Delta phi + nabla psi dot.op nabla phi \) upright(d) V = integral.cont_(partial Omega) psi \( nabla phi dot.op upright(bold(n)) \) upright(d) S$`
	},
	{
		"title": "Cauchy-Riemann Equations",
		"description": "complex analysis is best analysis (1); credit to blu_bird",
		"latex": String.raw`$frac(partial u, partial x) = frac(partial v, partial y) \, frac(partial u, partial y) = - frac(partial v, partial x)$`
	},
	{
		"title": "Cauchy's Integral Formula",
		"description": "complex analysis is best analysis (2); credit to blu_bird",
		"latex": String.raw`$f \( z_0 \) = frac(1, 2 pi i) integral.cont_Gamma frac(f \( z \), z - z_0) upright(d) z$`
	},
	{
		"title": "Cauchy's Differentiation Formula",
		"description": "complex analysis is best analysis (3); credit to blu_bird",
		"latex": String.raw`$f^(\( k \)) \( z_0 \) = frac(k !, 2 pi i) integral.cont_Gamma frac(f \( z \), \( z - z_0 \)^(k + 1)) upright(d) z$`
	},
	{
		"title": "Functional Equation for the Riemann-Zeta Function",
		"description": "This is the simplest example of a functional equation in the Langlands program. Conjecturally all Hasse-Weil zeta functions have Euler factorizations and functional equations with the Riemann zeta function as just one example.",
		"latex": String.raw`$pi^(- s \/ 2) Gamma (s / 2) zeta \( s \) = pi^(- \( 1 - s \) \/ 2) Gamma (frac(1 - s, 2)) zeta \( 1 - s \)$`
	},
	{
		"title": "Well-ordering Principle",
		"description": "Classic. Credit to Eucrue",
		"latex": String.raw`$forall M \( M subset bb(N) and M eq.not nothing arrow.r.double.long exists m_0 \[ m_0 in M and forall n \( n in M arrow.r.double.long m lt.eq n \) \] \)$`
	},
	{
		"title": "Asymptotic Formula for the Dirichlet Divisor Function",
		"description": "very cool dirichlet",
		"latex": String.raw`$sum_(n lt.eq x) tau \( n \) = x log x + \( 2 gamma - 1 \) x + O \( sqrt(x) \)$`
	},
	{
		"title": "Prime Number Theorem",
		"description": "trivial",
		"latex": String.raw`$pi \( x \) tilde.op frac(x, log x)$`
	},
	{
		"title": "Cumulative Distribution Function of the Gaussian Distribution",
		"description": "dense",
		"latex": String.raw`$Phi \( x \) = 1 / sqrt(2 pi) integral_(- oo)^x e^(- t^2 \/ 2) upright(d) t$`
	},
	{
		"title": "Chernoff Bound",
		"description": "I never really learned what this was",
		"latex": String.raw`$bb(P) \( X gt.eq t \) lt.eq frac(bb(E) \[ e^(lambda X) \], e^(lambda t))$`
	},
	{
		"title": "Union Bound",
		"description": "Never learned what this was either",
		"latex": String.raw`$bb(P) (union.big_(i = 1)^n X_i) lt.eq sum_(i = 1)^n bb(P) \( X_i \)$`
	},
	{
		"title": "Law of Total Probability",
		"description": "shrug",
		"latex": String.raw`$bb(P) \( A \) = sum_(i = 1)^n bb(P) \( A \| B_i \) bb(P) \( B_i \)$`
	},
	{
		"title": "Linear Least Squares Estimator",
		"description": "i love regression analysis",
		"latex": String.raw`$L \[ X \| Y \] = bb(E) \[ X \] + frac(upright(c o v) \( X \, Y \), upright(v a r) \( Y \)) \( Y - bb(E) \[ Y \] \)$`
	},
	{
		"title": "Rademacher Complexity",
		"description": "The empirical Rademacher complexity of a function class",
		"latex": String.raw`$cal(R)_n \( cal(F) \) = bb(E)_epsilon [sup_(f in cal(F)) 1 / n sum_(i = 1)^n epsilon_i f \( x_i \)]$`
	},
	{
		"title": "Definition of the Dilogarithm",
		"description": "aka Spence's function. don't wanna be accused of sleeping on spence",
		"latex": String.raw`$upright(L i)_2 \( z \) = - integral_0^z frac(log \( 1 - t \), t) upright(d) t \, z in bb(C)$`
	},
	{
		"title": "Leibniz's Determinant Formula",
		"description": "Determinant of an n by n matrix",
		"latex": String.raw`$det \( A \) = sum_(sigma in S_n) epsilon.alt \( sigma \) product_(i = 1)^n A_(i \, sigma \( i \))$`
	},
	{
		"title": "Euler-Lagrange Equations",
		"description": "The basis for all of Lagrangian mechanics",
		"latex": String.raw`$frac(partial L, partial q_i) = frac(upright(d), upright(d) t) frac(partial L, partial dot(q_i))$`
	},
	{
		"title": "Definition of the Euler Totient Function",
		"description": "what does totient mean anyways?",
		"latex": String.raw`$phi \( n \) = \| { k in bb(N)_(lt.eq n) \| gcd \( k \, n \) = 1 } \| = n product_(p \| n) (1 - 1 / p)$`
	},
	{
		"title": "Sum of Divisors",
		"description": "i guess this person likes multiplicative functions",
		"latex": String.raw`$sigma \( n \) = sum_(d \| n) d = product_(p^a \| \| n) (frac(p^(a + 1) - 1, p - 1))$`
	},
	{
		"title": "Einstein Field Equations",
		"description": "This form makes use of the Einstein tensor",
		"latex": String.raw`$G_(mu nu) + Lambda g_(mu nu) = frac(8 pi G, c^4) T_(mu nu)$`
	},
	{
		"title": "Second Fundamental Theorem of Calculus",
		"description": "credit to VBG",
		"latex": String.raw`$integral_a^b f \( x \) upright(d) x = \[ F \( x \) \]_a^b = F \( b \) - F \( a \)$`
	},
	{
		"title": "Abel's Summation Formula",
		"description": "unclear to me why this is at all useful tbh",
		"latex": String.raw`$sum_(x < n lt.eq y) a \( n \) f \( n \) = A \( y \) f \( y \) - A \( x \) f \( x \) - integral_x^y A \( t \) f' \( t \) upright(d) t$`
	},
	{
		"title": "Lagrange's Theorem",
		"description": "more group theory",
		"latex": String.raw`$\( G : H \) = frac(\| G \|, \| H \|)$`
	},
	{
		"title": "Catalan Numbers",
		"description": "A000108",
		"latex": String.raw`$C_n = sum_(k = 1)^(n - 1) C_k C_(n - k - 1) = frac(1, n + 1) binom(2 n, n)$`
	},
	{
		"title": "Ising Model Hamiltonian",
		"description": "Mathematical model of ferromagnetism",
		"latex": String.raw`$H \( sigma \) = - sum_(angle.l i \, j angle.r) J_(i j) sigma_i sigma_j - mu sum_j h_j sigma_j$`
	},
	{
		"title": "Borwein Integral",
		"description": "The pattern famously breaks down after this integral.",
		"latex": String.raw`$integral_0^oo frac(sin \( x \), x) frac(sin \( x \/ 3 \), x \/ 3) dots.h.c frac(sin \( x \/ 13 \), x \/ 13) upright(d) x = pi / 2$`
	},
	{
		"title": "Wigner Semicircle Distribution",
		"description": "Essentially just a semicircle scaled to be a probability distribution.",
		"latex": String.raw`$f(x)=cases((2)/(pi R^2)sqrt(R^2-x^2) & -R lt.eq x lt.eq R, 0 & |x|>R)$`
	},
	{
		"title": "Parseval Gutzmer Formula",
		"description": "Apply the Cauchy Integral Formula to derive",
		"latex": String.raw`$f \( z \) = sum_(k = 0)^oo a_k z^k arrow.r.double.long frac(1, 2 pi) integral_0^(2 pi) \| f \( r e^(i theta) \) \|^2 upright(d) theta = sum_(k = 0)^oo \| a_k r^k \|^2$`
	},
	{
		"title": "Fubini's Theorem",
		"description": "switching the order of integration ftw",
		"latex": String.raw`$integral_X (integral_Y f \( x \, y \) upright(d) y) upright(d) x = integral_Y (integral_X f \( x \, y \) upright(d) x) upright(d) y = integral_(X times Y) f \( x \, y \) upright(d) \( x \, y \)$`
	},
	{
		"title": "Coarea Formula",
		"description": "A generalization of Fubini's theorem",
		"latex": String.raw`$integral_Omega g \( x \) \| nabla u \( x \) \| upright(d) x = integral_(bb(R)) (integral_(u^(- 1) \( t \)) g \( x \) upright(d) H_(n - 1) \( x \)) upright(d) t$`
	},
	{
		"title": "Equation of a Torus",
		"description": "yum, donuts",
		"latex": String.raw`$\( sqrt(x^2 + y^2) - R \)^2 + z^2 = r$`
	},
	{
		"title": "Ampère-Maxwell law",
		"description": "credit to Andrija",
		"latex": String.raw`$nabla times upright(bold(B)) = mu_0 (upright(bold(J)) + epsilon_0 frac(partial upright(bold(E)), partial t))$`
	},
	{
		"title": "Gauss's Flux Theorem (differential form)",
		"description": "guess we're doing all of Maxwell's equations now huh",
		"latex": String.raw`$nabla dot.op upright(bold(E)) = rho / epsilon_0$`
	},
	{
		"title": "Gauss's law for Magnetism",
		"description": "I'll need to fix this once we discover magnetic monopoles.",
		"latex": String.raw`$nabla dot.op upright(bold(B)) = 0$`
	},
	{
		"title": "Maxwell–Faraday equation",
		"description": "induction",
		"latex": String.raw`$nabla times upright(bold(E)) = - frac(partial upright(bold(B)), partial t)$`
	},
	{
		"title": "Eigenvalue Formula",
		"description": "this yields the characteristic polynomial",
		"latex": String.raw`$det \( upright(bold(A)) - lambda upright(bold(I)) \) = 0$`
	},
	{
		"title": "Collatz Function",
		"description": "The conjecture is that repeated applications of this function always hit 1.",
		"latex": String.raw`$f \( n \) = cases(delim: "{", n \/ 2 & n equiv 0 med \( mod med 2 \), 3 n + 1 & n equiv 1 med \( mod med 2 \))$`
	},
	{
		"title": "Gamma Function",
		"description": "A generalization of the factorial function",
		"latex": String.raw`$Gamma \( z \) = integral_0^oo x^(z - 1) e^(- x) upright(d) x$`
	},
	{
		"title": "Laplace Transform",
		"description": "signals and systems baby",
		"latex": String.raw`$cal(L) { f } \( s \) = integral_0^oo f \( t \) e^(- s t) upright(d) t$`
	},
	{
		"title": "Taylor Series",
		"description": "When a = 0, it's a Maclaurin series",
		"latex": String.raw`$f \( x \) = sum_(n = 0)^oo frac(f^(\( n \)) \( a \), n !) \( x - a \)^n$`
	},
	{
		"title": "Quaternion Multiplication Formula",
		"description": "Hamilton famously carved this formula into the stone of a bridge when he came up with it.",
		"latex": String.raw`$upright(bold(i))^2 = upright(bold(j))^2 = upright(bold(k))^2 = upright(bold(i)) upright(bold(j)) upright(bold(k)) = - 1$`
	},
	{
		"title": "General Solution to First-Order Linear Differential Equations",
		"description": "You can derive this with an integrating factor. ",
		"latex": String.raw`$y = e^(- integral P \( x \) upright(d) x) integral Q \( x \) e^(integral P \( x \) upright(d) x) upright(d) x + C e^(- integral P \( x \) upright(d) x)$`
	},
	{
		"title": "Fibonacci Binomial Coefficients Identity",
		"description": "Sum up the shallow diagonals of Pascal's triangle to make Fibonacci numbers",
		"latex": String.raw`$F_(n + 1) = binom(n, 0) + binom(n - 1, 1) + binom(n - 2, 2) + dots.h.c + binom(n - floor.l n \/ 2 floor.r, floor.l n \/ 2 floor.r)$`
	},
	{
		"title": "Bellman Optimality Equation",
		"description": "Somehow connected to reinforcement learning! Credit to Constantine.",
		"latex": String.raw`$V^(pi \*) \( s \) = max_a { R \( s \, a \) + gamma sum_(s') P \( s' \| s \, a \) V^(pi \*) \( s' \) }$`
	},
	{
		"title": "Definition of a Well-founded Relation",
		"description": "R is well-founded iff every proper subset contains a minimal element with respect to R. Credit to Constantine.",
		"latex": String.raw`$\( forall S subset.eq X \) \[ S eq.not nothing arrow.r.double.long \( exists m in S \) \( forall s in S \) not \( s R m \) \]$`
	},
	{
		"title": "Estimation Lemma",
		"description": "Credit to Ben Napier.",
		"latex": String.raw`$lr(|integral_gamma f \( z \) upright(d) z|) lt.eq L \( gamma \) sup_gamma \| f \|$`
	},
	{
		"title": "Chaitin's Constant",
		"description": "The probability that a randomly constructed program will halt.",
		"latex": String.raw`$Omega_F = sum_(p in P_F) 2^(- \| p \|)$`
	},
	{
		"title": "Cauchy's Differentiation Formula",
		"description": "Credit to epm",
		"latex": String.raw`$f^(\( n \)) \( a \) = frac(n !, 2 pi i) integral.cont_gamma frac(f \( z \), \( z - a \)^(n + 1)) upright(d) z$`
	},
	{
		"title": "Defintion of the Quasi-Stationary Distribution",
		"description": "Getting rid of absorbing states.",
		"latex": String.raw`$forall B in cal(B) \( cal(X)^a \) \, forall t gt.eq 0 \, P_nu \( Y_t in B \, T > t \) = nu \( B \) P_nu \( T > t \)$`
	},
	{
		"title": "Addition of Sound Levels in Decibels",
		"description": "50dB + 50dB --> ~53dB!",
		"latex": String.raw`$L_(a b) = 10 log_10 (10^(L_a \/ 10) + 10^(L_b \/ 10))$`
	},
	{
		"title": "Fast-Growing Hierarchy",
		"description": "You wanna see some real speed?",
		"latex": String.raw`$f_alpha \( n \) = cases(delim: "{", n + 1 & alpha = 0, f_beta \( n \) & alpha = beta + 1, f_(alpha \[ n \]) \( n \) & upright("else"))$`
	},
	{
		"title": "Feigenbaum-Cvitanović Functional Equation",
		"description": "Damn, that's a mouthful.",
		"latex": String.raw`$g \( g \( x \) \) = - 1 / alpha g \( alpha x \)$`
	},
	{
		"title": "Dirac Equation",
		"description": "Relativistic wave equation. Credit to Leon.",
		"latex": String.raw`$i planck.reduce gamma^mu partial_mu psi - m c psi = 0$`
	},
	{
		"title": "Feynman's Trick",
		"description": "Essentially differentiating under the integral sign; the given problem is extremely difficult to solve otherwise. Credit to Aarsh Chotalia.",
		"latex": String.raw`$integral_0^pi ln \( 1 - 2 alpha cos x + alpha^2 \) upright(d) x = 2 pi ln \| alpha \|$`
	},
	{
		"title": "Lorentz Factor",
		"description": "Time and length change by a factor of gamma when objects move near the speed of light.",
		"latex": String.raw`$gamma = 1 / sqrt(1 - v^2 / c^2)$`
	},
	{
		"title": "Time Dilation",
		"description": "Clocks moving at high speed will be observed to tick slower.",
		"latex": String.raw`$Delta t = frac(Delta t_0, sqrt(1 - v^2 / c^2))$`
	},
	{
		"title": "Gauss's Flux Theorem (integral form)",
		"description": "Use the divergence theorem to get to the differential form.",
		"latex": String.raw`$integral.surf_S upright(bold(E)) dot.op upright(d) upright(bold(A)) = Q / epsilon_0$`
	},
	{
		"title": "Doppler Effect",
		"description": "beep beep beep",
		"latex": String.raw`$f_o / f_s = lambda_s / lambda_o = frac(v plus.minus v_o, v minus.plus v_s)$`
	},
	{
		"title": "Bernoulli's Equation",
		"description": "I included just because it included this bonkers \varrho thingy. What was wrong with \rho??",
		"latex": String.raw`$P_1 + 𝜚 g y_1 + 1 / 2 𝜚 v_1^2 = P_2 + 𝜚 g y_2 + 1 / 2 𝜚 v_2^2$`
	},
	{
		"title": String.raw`Relation between \(K_p\) and \(K_c\)`,
		"description": "Credit to Freddie Bullard.",
		"latex": String.raw`$K_p = K_c \( R T \)^(Delta n)$`
	},
	{
		"title": "Van der Waals Equation",
		"description": "Generalization of the Ideal Gas Law.",
		"latex": String.raw`$(P + a n^2 / V^2) \( V - n b \) = n R T$`
	},
	{
		"title": "Maxwell-Boltzmann Distribution",
		"description": "Don't have enough statistical mechanics formulas.",
		"latex": String.raw`$f \( v \) = 4 pi v^2 (frac(m, 2 pi k T))^(3 \/ 2) e^(- frac(m v^2, 2 k_B T))$`
	},
	{
		"title": "Cayley-Hamilton Theorem",
		"description": "Square matrices over commutative rings are annihilated by their own characteristic polynomial.",
		"latex": String.raw`$p \( lambda \) = det \( lambda upright(bold(I))_n - upright(bold(A)) \) arrow.r.double.long p \( upright(bold(A)) \) = 0$`
	},
	{
		"title": String.raw`Chudnovsky's Formula for \(\pi\)`,
		"description": "This formula, based on a Ramanujan formula, was used to calculate pi to the tens of trillions of digits.",
		"latex": String.raw`$1 / pi = 12 sum_(k = 0)^oo frac(\( - 1 \)^k \( 6 k \) ! \( 545140134 k + 13591409 \), \( 3 k \) ! \( k ! \)^3 \( 640320 \)^(3 k + 3 \/ 2))$`
	},
	{
		"title": "Residue Theorem",
		"description": "Q: Why did the mathematician name her dog Cauchy? A: Because it left a residue at every pole.",
		"latex": String.raw`$frac(1, 2 pi i) integral.cont_gamma f \( z \) upright(d) z = sum_(p upright(" pole")) upright(bold(I)) \( gamma \, p \) upright(R e s) \( f \, p \)$`
	},
	{
		"title": "Center of Mass",
		"description": "In a uniform gravitation field, this is the same as the center of gravity.",
		"latex": String.raw`$upright(bold(R)) = 1 / M integral.triple_Q rho \( upright(bold(r)) \) upright(bold(r)) upright(d) V$`
	},
	{
		"title": "The Fundamental Group of the Circle",
		"description": "It's isomorphic to the group of integers. Credit to fish.",
		"latex": String.raw`$pi_1 \( S^1 \) tilde.equiv bb(Z)$`
	},
	{
		"title": "Definition of the Operator Norm on a Finite Dimensional Banach Space.",
		"description": "Credit to Richik Chakraborty.",
		"latex": String.raw`${frac(parallel T \( x \) parallel', parallel x parallel) : x eq.not 0 \, x in X} equiv {parallel T \( x \) parallel' : parallel x parallel = 1 \, x in X}$`
	},
	{
		"title": "Green's Theorem",
		"description": "Credit to Facejo.",
		"latex": String.raw`$integral.cont_C \( L upright(d) x + M upright(d) y \) = integral.double_D (frac(partial M, partial x) - frac(partial L, partial y)) upright(d) x upright(d) y$`
	},
	{
		"title": "Portfolio Variance",
		"description": "Used to compute the covariance of a portfolio made up of n different assets, if the single variances and covariances are known. Credit to Marco.",
		"latex": String.raw`$sigma_z^2 = (sum_(i = 1)^n w_i^2 sigma_i^2) + 2 (sum_(i = 1)^(n - 1) sum_(j = i + 1)^n w_i w_j sigma_(i \, j))$`
	},
	{
		"title": "Newton's Method",
		"description": "Credit to https://github.com/lucasalavapena.",
		"latex": String.raw`$x_(n + 1) = x_n - frac(f \( x_n \), f' \( x_n \))$`
	},
	{
		"title": "Shannon Entropy",
		"description": "Credit to https://github.com/lucasalavapena.",
		"latex": String.raw`$H \( X \) = - sum_(i = 1)^n P \( x_i \) log_2 P \( x_i \)$`
	},
	{
		"title": "Pinsker's inequality",
		"description": "It's possible I'm off by a factor of two here.",
		"latex": String.raw`$||mu-nu||_(T V) lt.eq sqrt(2 D_(K L)(mu||nu))$`
	},
	{
		"title": "Sackur-Tetrode equation",
		"description": "Entropy of monatomic ideal gas. Credit to Haydn Gwyn.",
		"latex": String.raw`$frac(S, k_B N) = ln [V / N (frac(4 pi m, 3 h^2) U / N)^(3 \/ 2)] + 5 / 2$`
	},
	{
		"title": "Condtional Entropy",
		"description": "The amount of information needed to describe the outcome of a random variable given the outcome of another variable.",
		"latex": String.raw`$upright(H) \( Y \| X \) = - sum_(x in cal(X) \, y in cal(Y)) p \( x \, y \) log frac(p \( x \, y \), p \( x \))$`
	},
	{
		"title": "Force-Potential Relation",
		"description": "Force is defined as the negative gradient of the potential energy function. Credit to Mayank Kumar.",
		"latex": String.raw`$upright(bold(F)) = - frac(partial U, partial x) hat(upright(bold(i))) - frac(partial U, partial y) hat(upright(bold(j))) - frac(partial U, partial z) hat(upright(bold(k))) = - arrow(nabla) \( U \)$`
	},
	{
		"title": "Beta Function",
		"description": "A special function that is closely related to the gamma function and to binomial coefficients. Credit to Salil Gokhale.",
		"latex": String.raw`$B \( x \, y \) = integral_0^1 t^(x - 1) \( 1 - t \)^(y - 1) upright(d) t$`
	},
	{
		"title": "Moist Adiabatic Lapse Rate",
		"description": "The rate that the temperature falls with respect to altitude in a wet environment.",
		"latex": String.raw`$Gamma_(upright(w)) = - frac(upright(d) T, upright(d) z) = g (1 + frac(H_(upright(v)) r, R_(upright(s d)) T)) / (c_(upright(p d)) + frac(H_(upright(v))^2 r, R_(upright(s w)) T^2))$`
	},
	{
		"title": "Cardano's Formula",
		"description": "Solution for a depressed cubic. Credit to TetanicRain7592.",
		"latex": String.raw`$root(3, - q / 2 + sqrt(q^2 / 4 + p^3 / 27)) + root(3, - q / 2 - sqrt(q^2 / 4 + p^3 / 27))$`
	},
	{
		"title": "General Cubic Formula",
		"description": "The deltas represents the cubic's discriminants. You must choose /any/ cube root and /any/ square root that doesn't result in C = 0. Credit to TetanicRain7592.",
		"latex": String.raw`$C = root(3, frac(Delta_1 plus.minus sqrt(Delta_1^2 - 4 Delta_0^3), 2))$`
	},
	{
		"title": "Riemann Zeta Function",
		"description": "This formula works when the real part of s is greater than 1. Other cases require analytic continuation.",
		"latex": String.raw`$zeta \( s \) = frac(1, Gamma \( s \)) integral_0^oo frac(x^(s - 1), e^x - 1) upright(d) x$`
	},
	{
		"title": "Tangent Sum of Angles Formula",
		"description": "Credit to TetanicRain7592.",
		"latex": String.raw`$tan \( alpha plus.minus beta \) = frac(tan \( alpha \) plus.minus tan \( beta \), 1 minus.plus tan \( alpha \) tan \( beta \))$`
	},
	{
		"title": "Inner Product of Continuous Complex Valued Functions",
		"description": "Credit to Zeus Hernández.",
		"latex": String.raw`$angle.l f \, g angle.r = integral_0^(2 pi) f \( t \) overline(g \( t \)) upright(d) t$`
	},
	{
		"title": "Definition of a Psuedorandom Generator",
		"description": "Crypto means Cryptography!",
		"latex": String.raw`$lr(|Pr_(x arrow.l { 0 \, 1 }^k) \[ cal(A) \( G \( x \) \) = 1 \] - Pr_(x arrow.l { 0 \, 1 }^(p \( k \))) \[ cal(A) \( x \) = 1 \]|) < mu \( k \)$`
	},
	{
		"title": "Generalized Stokes' theorem",
		"description": "One theorem to rule them all",
		"latex": String.raw`$integral_(partial M) omega = integral_M upright(d) omega$`
	},
	{
		"title": "Cartan's magic formula",
		"description": "A cool little magic trick",
		"latex": String.raw`$cal(L)_X = upright(d) circle.stroked.tiny iota_X + iota_X circle.stroked.tiny upright(d)$`
	}
];